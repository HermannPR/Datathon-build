# 🚀 Guía Completa: Datathon Flask + React

## 📋 Resumen de la Aplicación

Tu aplicación está dividida en dos partes:
- **Backend Flask** (Puerto 5000): API para predicciones con modelos de ML
- **Frontend React** (Puerto 5173): Interfaz web para subir CSV y ver resultados

## 🛠️ Configuración Inicial

### 1. Preparar Backend
```bash
cd d:\vscodeprojects\DATATHON\backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Preparar Frontend  
```bash
cd d:\vscodeprojects\DATATHON\frontend
npm install
```

## 🔄 Flujo de Trabajo: Colab → VSCode

### Paso 1: Entrenar en Colab
En tu notebook de Colab, asegúrate de generar estos archivos:
```python
# Al final de tu entrenamiento, guarda:
model_regresion.save('modelo_regresion_ahorro_ganancia.h5')
model_clasificacion.save('modelo_clasificacion_emisora.h5')
joblib.dump(scaler, 'scaler.pkl')
joblib.dump(label_encoder, 'label_encoder.pkl')

# Descargar los archivos
from google.colab import files
files.download('modelo_regresion_ahorro_ganancia.h5')
files.download('modelo_clasificacion_emisora.h5')
files.download('scaler.pkl')
files.download('label_encoder.pkl')
```

### Paso 2: Mover archivos a VSCode
Copia los 4 archivos descargados a: `d:\vscodeprojects\DATATHON\backend\`

### Paso 3: Verificar estructura
```
backend/
├── app.py
├── requirements.txt
├── datos_ejemplo.csv
├── modelo_regresion_ahorro_ganancia.h5  ← Desde Colab
├── modelo_clasificacion_emisora.h5      ← Desde Colab  
├── scaler.pkl                           ← Desde Colab
└── label_encoder.pkl                    ← Desde Colab
```

## 🚀 Ejecutar la Aplicación

### Opción 1: Script Automático
```bash
# Desde la raíz del proyecto
.\start_full_app.bat
```

### Opción 2: Manual

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend  
npm run dev
```

## 🌐 URLs de Acceso

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Estado de modelos:** http://localhost:5000/ (GET)

## 📊 Cómo Usar la Aplicación

### 1. Preparar CSV
Tu archivo debe tener exactamente estas columnas:
```csv
montoCobrar,montoCobrado,montoExigible,diaCobro,horaCobro
1000,800,1200,15,14
1500,1500,1800,20,16
2000,1800,2200,25,12
```

### 2. Subir y Procesar
1. Abre http://localhost:5173
2. Selecciona tu archivo CSV
3. Haz clic en "🚀 Subir y predecir"
4. Ve los resultados en tiempo real

### 3. Interpretar Resultados
La tabla mostrará:
- **💰 Predicción Ahorro:** Cantidad de ahorro estimada
- **📊 Predicción Ganancia:** Ganancia esperada  
- **🏦 Mejor Emisora:** Emisora recomendada
- **📈 Probabilidades:** Confianza de cada emisora
- **Datos originales:** Para referencia

## 🔧 Troubleshooting

### ❌ "Los modelos no están disponibles"
**Solución:** Verifica que los 4 archivos (.h5 y .pkl) estén en `backend/`

### ❌ "Cannot connect to backend"
**Solución:** 
1. Verifica que Flask esté ejecutándose: http://localhost:5000
2. Revisa que no haya errores en la terminal del backend

### ❌ "Faltan columnas en el CSV"
**Solución:** Tu CSV debe tener exactamente: `montoCobrar,montoCobrado,montoExigible,diaCobro,horaCobro`

### ❌ Error de dependencias
**Solución:**
```bash
cd backend
pip install --upgrade tensorflow flask pandas joblib scikit-learn flask-cors
```

## 🔄 Reentrenar Modelos

Cuando quieras actualizar tus modelos:
1. Entrena nuevamente en Colab
2. Descarga los nuevos archivos .h5 y .pkl
3. Reemplaza los archivos en `backend/`
4. Reinicia el servidor Flask (Ctrl+C y `python app.py`)

## 📈 Próximos Pasos

- **Despliegue:** Usar Vercel (frontend) + Railway/Heroku (backend)
- **Mejoras:** Validación avanzada, gráficos, export a Excel
- **Monitoring:** Logs de predicciones, métricas de uso

## 📞 Testing Rápido

```bash
# Test básico del backend
curl http://localhost:5000/

# Test con archivo (PowerShell)
$form = @{file = Get-Item "datos_ejemplo.csv"}
Invoke-RestMethod -Uri "http://localhost:5000/predict" -Method Post -Form $form
```

¡Tu aplicación de datathon está lista! 🎉
