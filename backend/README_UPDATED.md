# 🏦 Backend Flask - Predicción de Cobros - Datathon

Este es el backend de la aplicación para predecir ahorros, ganancias y mejores emisoras basado en datos de cobros.

## 📋 Requisitos Previos

- Python 3.8+
- Modelos entrenados de Colab (.h5 y .pkl)

## 🚀 Configuración Rápida

### 1. Activar entorno virtual y instalar dependencias:
```bash
# Desde la carpeta backend/
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

### 2. Copiar modelos desde Colab:
Asegúrate de tener estos archivos en la carpeta `backend/`:
- `modelo_regresion_ahorro_ganancia.h5`
- `modelo_clasificacion_emisora.h5`
- `scaler.pkl`
- `label_encoder.pkl`

### 3. Ejecutar servidor:
```bash
python app.py
```

El servidor estará disponible en: http://localhost:5000

## 📊 API Endpoints

### POST /predict
Recibe un archivo CSV y devuelve predicciones.

**Request:**
- Método: POST
- Content-Type: multipart/form-data
- Body: archivo CSV con columnas: `montoCobrar`, `montoCobrado`, `montoExigible`, `diaCobro`, `horaCobro`

**Response:**
```json
[
  {
    "pred_ahorro": 1250.75,
    "pred_ganancia": 890.50,
    "mejor_emisora_clase": "Banco A"
  }
]
```

## 🔧 Flujo de Trabajo con Colab

1. **Entrenar en Colab:** Usa tu notebook actual para entrenar modelos
2. **Descargar:** Baja los archivos .h5 y .pkl desde `/content/` 
3. **Copiar:** Mueve los archivos a esta carpeta `backend/`
4. **Ejecutar:** Inicia el servidor Flask
5. **Probar:** Usa el frontend o herramientas como Postman

## 📁 Estructura de Archivos

```
backend/
├── app.py                              # Servidor Flask principal
├── requirements.txt                    # Dependencias Python
├── datos_ejemplo.csv                   # Datos de prueba
├── modelo_regresion_ahorro_ganancia.h5 # Modelo de regresión (desde Colab)
├── modelo_clasificacion_emisora.h5     # Modelo de clasificación (desde Colab)
├── scaler.pkl                          # Escalador de características (desde Colab)
└── label_encoder.pkl                   # Codificador de etiquetas (desde Colab)
```

## 🌐 Integración con Frontend

El frontend React (puerto 5173) se conecta automáticamente a este backend (puerto 5000) para:
- Subir archivos CSV
- Procesar predicciones
- Mostrar resultados en tabla interactiva

## 🛠️ Troubleshooting

**Error: Modelos no encontrados**
- Verifica que los archivos .h5 y .pkl estén en la carpeta backend/
- Asegúrate de que los nombres coincidan exactamente

**Error: Dependencias**
```bash
pip install --upgrade tensorflow flask pandas joblib scikit-learn
```

**Error: CORS**
- El backend ya incluye flask-cors configurado para desarrollo
