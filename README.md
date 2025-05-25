# 🏦 Datathon - Predicción de Cobros

Una aplicación completa para predecir ahorros, ganancias y mejores emisoras basada en datos de cobros financieros.

## 🚀 Características

- **Backend Flask**: API REST para procesamiento de predicciones
- **Frontend React**: Interfaz moderna con TypeScript y Vite
- **Machine Learning**: Modelos de regresión y clasificación con TensorFlow
- **Procesamiento CSV**: Carga y análisis de archivos de datos
- **Visualización**: Tablas interactivas con resultados

## 📁 Estructura del Proyecto

```
DATATHON/
├── backend/                    # API Flask
│   ├── app.py                 # Servidor principal
│   ├── requirements.txt       # Dependencias Python
│   ├── datos_ejemplo.csv      # Datos de prueba
│   └── README.md             # Documentación backend
├── frontend/                  # Aplicación React
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── api/             # Cliente API
│   │   └── App.tsx          # Componente principal
│   ├── package.json         # Dependencias Node.js
│   └── README.md           # Documentación frontend
├── uploads/                   # Archivos temporales
├── setup.bat                 # Script de configuración
├── start_full_app.bat        # Script de inicio completo
└── README.md                 # Este archivo
```

## ⚡ Inicio Rápido

### Opción 1: Script Automático (Windows)
```bash
# Configurar todo el proyecto
setup.bat

# Iniciar backend y frontend
start_full_app.bat
```

### Opción 2: Manual

#### Backend (Puerto 5000)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

#### Frontend (Puerto 5173)
```bash
cd frontend
npm install
npm run dev
```

## 🧠 Modelos Requeridos

Para que la aplicación funcione completamente, necesitas estos archivos en `backend/`:

- `modelo_regresion_ahorro_ganancia.h5` - Modelo de regresión TensorFlow
- `modelo_clasificacion_emisora.h5` - Modelo de clasificación TensorFlow  
- `scaler.pkl` - Escalador de características
- `label_encoder.pkl` - Codificador de etiquetas

### 📊 Entrenamiento en Google Colab

1. Entrena tus modelos en Google Colab
2. Descarga los archivos `.h5` y `.pkl` desde `/content/`
3. Copia los archivos a la carpeta `backend/`
4. Reinicia el servidor Flask

## 🔗 Endpoints API

### POST `/predict`
Procesa un archivo CSV y devuelve predicciones.

**Entrada:**
- Archivo CSV con columnas: `montoCobrar`, `montoCobrado`, `montoExigible`, `diaCobro`, `horaCobro`

**Salida:**
```json
[
  {
    "pred_ahorro": 1250.75,
    "pred_ganancia": 890.50,
    "mejor_emisora_clase": "Banco A"
  }
]
```

## 🛠️ Tecnologías

- **Backend**: Python, Flask, TensorFlow, Pandas, NumPy
- **Frontend**: React, TypeScript, Vite
- **Machine Learning**: TensorFlow/Keras, Scikit-learn
- **Styling**: CSS personalizado con temas modernos

## 📈 Flujo de Trabajo

1. **Desarrollo Local**: Usa VSCode para desarrollar y probar
2. **Entrenamiento**: Usa Google Colab para entrenar modelos
3. **Integración**: Copia modelos entrenados al backend
4. **Predicción**: Sube CSVs a través del frontend
5. **Resultados**: Visualiza predicciones en tabla interactiva

## 🐛 Solución de Problemas

### Error: Modelos no encontrados
```bash
# Verifica que los archivos están en backend/
ls backend/*.h5 backend/*.pkl
```

### Error: Puerto en uso
```bash
# Cambia el puerto en backend/app.py
app.run(debug=True, port=5001)
```

### Error: CORS
- El backend ya incluye configuración CORS para desarrollo

## 📄 Licencia

Este proyecto fue desarrollado para el Datathon [Año]. 

## 👥 Contribuidores

- [Tu Nombre] - Desarrollo completo
- [Equipo] - Análisis de datos y modelado

## 🚀 Próximas Mejoras

- [ ] Despliegue en la nube (Heroku/Vercel)
- [ ] Autenticación de usuarios
- [ ] Histórico de predicciones
- [ ] Gráficos de visualización
- [ ] API de reentrenamiento automático

---

💡 **Tip**: Para desarrollo, mantén el backend en puerto 5000 y frontend en 5173 para evitar problemas de CORS.
