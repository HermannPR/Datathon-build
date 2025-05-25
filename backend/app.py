from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import tensorflow as tf
import numpy as np
import joblib
import os
import traceback

app = Flask(__name__)
CORS(app)

# Variables globales para los modelos
model_reg = None
model_class = None
scaler = None
label_encoder = None

def load_models():
    """Cargar modelos y preprocesadores si existen"""
    global model_reg, model_class, scaler, label_encoder
    
    try:
        if os.path.exists('modelo_regresion_ahorro_ganancia.h5'):
            model_reg = tf.keras.models.load_model('modelo_regresion_ahorro_ganancia.h5')
            print("✅ Modelo de regresión cargado")
        else:
            print("⚠️ modelo_regresion_ahorro_ganancia.h5 no encontrado")
            
        if os.path.exists('modelo_clasificacion_emisora.h5'):
            model_class = tf.keras.models.load_model('modelo_clasificacion_emisora.h5')
            print("✅ Modelo de clasificación cargado")
        else:
            print("⚠️ modelo_clasificacion_emisora.h5 no encontrado")
            
        if os.path.exists('scaler.pkl'):
            scaler = joblib.load('scaler.pkl')
            print("✅ Scaler cargado")
        else:
            print("⚠️ scaler.pkl no encontrado")
            
        if os.path.exists('label_encoder.pkl'):
            label_encoder = joblib.load('label_encoder.pkl')
            print("✅ Label encoder cargado")
        else:
            print("⚠️ label_encoder.pkl no encontrado")
            
    except Exception as e:
        print(f"❌ Error cargando modelos: {str(e)}")

@app.route('/', methods=['GET'])
def home():
    """Endpoint de prueba"""
    models_status = {
        'modelo_regresion': model_reg is not None,
        'modelo_clasificacion': model_class is not None,
        'scaler': scaler is not None,
        'label_encoder': label_encoder is not None
    }
    
    return jsonify({
        'message': 'Backend de Datathon funcionando!',
        'models_loaded': models_status,
        'all_models_ready': all(models_status.values())
    })

@app.route('/predict', methods=['POST'])
def predict():
    """Endpoint principal para predicciones"""
    try:
        # Verificar que todos los modelos estén cargados
        if not all([model_reg, model_class, scaler, label_encoder]):
            return jsonify({
                'error': 'No todos los modelos están cargados. Asegúrate de tener todos los archivos .h5 y .pkl en la carpeta backend.'
            }), 500
        
        # Verificar que se subió un archivo
        if 'file' not in request.files:
            return jsonify({'error': 'No se subió ningún archivo'}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No se seleccionó ningún archivo'}), 400
        
        # Leer el CSV
        df = pd.read_csv(file)
        
        # Verificar que existan las columnas necesarias
        required_features = ['montoCobrar', 'montoCobrado', 'montoExigible', 'diaCobro', 'horaCobro']
        missing_features = [col for col in required_features if col not in df.columns]
        
        if missing_features:
            return jsonify({
                'error': f'Faltan las siguientes columnas en el CSV: {missing_features}',
                'columns_found': list(df.columns)
            }), 400
        
        # Seleccionar y preparar las características
        X = df[required_features].copy()
        
        # Verificar que no haya valores nulos
        if X.isnull().any().any():
            return jsonify({
                'error': 'El dataset contiene valores nulos. Por favor, límpialos antes de hacer predicciones.'
            }), 400
        
        # Escalar los datos
        X_scaled = scaler.transform(X)
        
        # Hacer predicciones
        y_reg = model_reg.predict(X_scaled)
        y_class_probs = model_class.predict(X_scaled)
        y_class_labels = label_encoder.inverse_transform(np.argmax(y_class_probs, axis=1))
        
        # Crear output
        output = pd.DataFrame(y_reg, columns=['pred_ahorro', 'pred_ganancia'])
        output['mejor_emisora_clase'] = y_class_labels
        
        # Agregar las probabilidades de cada clase
        class_names = label_encoder.classes_
        for i, class_name in enumerate(class_names):
            output[f'prob_{class_name}'] = y_class_probs[:, i]
        
        # Agregar datos originales para referencia
        output['montoCobrar_original'] = df['montoCobrar'].values
        output['montoCobrado_original'] = df['montoCobrado'].values
        
        return jsonify({
            'success': True,
            'predictions': output.to_dict(orient='records'),
            'total_predictions': len(output),
            'summary': {
                'avg_pred_ahorro': float(output['pred_ahorro'].mean()),
                'avg_pred_ganancia': float(output['pred_ganancia'].mean()),
                'most_common_emisora': output['mejor_emisora_clase'].mode()[0] if len(output) > 0 else None
            }
        })
        
    except Exception as e:
        return jsonify({
            'error': f'Error procesando la predicción: {str(e)}',
            'traceback': traceback.format_exc()
        }), 500

@app.route('/upload-models', methods=['POST'])
def upload_models():
    """Endpoint para subir modelos desde Colab"""
    try:
        uploaded_files = []
        
        # Manejar múltiples archivos
        for key in request.files:
            file = request.files[key]
            if file.filename != '':
                # Guardar el archivo
                file.save(file.filename)
                uploaded_files.append(file.filename)
        
        # Recargar modelos
        load_models()
        
        return jsonify({
            'success': True,
            'uploaded_files': uploaded_files,
            'message': 'Modelos subidos y cargados correctamente'
        })
        
    except Exception as e:
        return jsonify({
            'error': f'Error subiendo modelos: {str(e)}'
        }), 500

if __name__ == '__main__':
    print("🚀 Iniciando backend de Datathon...")
    load_models()
    app.run(debug=True, host='0.0.0.0', port=5000)
