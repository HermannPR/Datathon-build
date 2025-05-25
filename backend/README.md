# Backend de Datathon - Flask API

## 🚀 Configuración inicial

### 1. Crear entorno virtual
```bash
cd backend
python -m venv venv
```

### 2. Activar entorno virtual
```bash
# En Windows PowerShell
venv\Scripts\Activate.ps1

# En Windows CMD
venv\Scripts\activate

# En Linux/Mac
source venv/bin/activate
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Ejecutar el servidor
```bash
python app.py
```

El servidor estará disponible en: `http://localhost:5000`

## 📁 Archivos de modelos necesarios

Para que el backend funcione completamente, necesitas los siguientes archivos en la carpeta `backend/`:

- `modelo_regresion_ahorro_ganancia.h5` - Modelo de regresión entrenado
- `modelo_clasificacion_emisora.h5` - Modelo de clasificación entrenado  
- `scaler.pkl` - Scaler para normalizar datos
- `label_encoder.pkl` - Encoder para las clases de emisoras

## 🔗 Endpoints disponibles

### GET `/`
Endpoint de prueba que muestra el estado de los modelos cargados.

### POST `/predict`
Endpoint principal para hacer predicciones.
- **Input**: Archivo CSV con columnas: `montoCobrar`, `montoCobrado`, `montoExigible`, `diaCobro`, `horaCobro`
- **Output**: JSON con predicciones de ahorro, ganancia y mejor emisora

### POST `/upload-models`
Endpoint para subir modelos desde Colab u otra fuente.

## 📊 Flujo de trabajo con Colab

1. **Entrenar en Colab**: Usa tus notebooks para entrenar modelos
2. **Descargar modelos**: Descarga los archivos `.h5` y `.pkl` de Colab
3. **Copiar a backend**: Coloca los archivos en la carpeta `backend/`
4. **Reiniciar Flask**: El servidor recargará automáticamente los modelos

## 🧪 Ejemplo de uso

```python
import requests

# Hacer predicción
url = "http://localhost:5000/predict"
files = {'file': open('datos_test.csv', 'rb')}
response = requests.post(url, files=files)
predictions = response.json()
```
