# 🚀 Instrucciones Completas - Datathon

## 📋 Configuración del Proyecto

### 🔧 Opción 1: Configuración Automática (Recomendado)
```bash
# Ejecutar script de configuración
setup.bat

# Iniciar aplicación completa
start_full_app.bat
```

### 🔧 Opción 2: Configuración Manual

#### 1. Activar entorno virtual del backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
```

#### 2. Instalar dependencias del backend
```bash
pip install -r requirements.txt
```

#### 3. Instalar dependencias del frontend
```bash
cd ..\frontend
npm install
```

#### 4. Ejecutar backend (Puerto 5000)
```bash
cd ..\backend
venv\Scripts\activate
python app.py
```

#### 5. Ejecutar frontend (Puerto 5173)
```bash
cd ..\frontend
npm run dev
```

## 📁 Archivos necesarios desde Colab

Coloca estos archivos en la carpeta `backend/`:
- `modelo_regresion_ahorro_ganancia.h5` - Modelo de regresión TensorFlow
- `modelo_clasificacion_emisora.h5` - Modelo de clasificación TensorFlow
- `scaler.pkl` - Escalador de características
- `label_encoder.pkl` - Codificador de etiquetas

### 📊 Cómo obtener los modelos desde Colab:
1. En tu notebook de Colab, ejecuta:
   ```python
   # Descargar modelos entrenados
   from google.colab import files
   
   files.download('modelo_regresion_ahorro_ganancia.h5')
   files.download('modelo_clasificacion_emisora.h5')
   files.download('scaler.pkl')
   files.download('label_encoder.pkl')
   ```
2. Copia los archivos descargados a la carpeta `backend/`
3. Reinicia el servidor Flask

## 🔗 URLs de la aplicación

- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173 (o http://localhost:5174)
- **API Documentation**: http://localhost:5000/docs (si implementas)

## 📊 Formato CSV requerido

El archivo CSV debe contener exactamente estas columnas:
- `montoCobrar` - Monto a cobrar (numérico)
- `montoCobrado` - Monto efectivamente cobrado (numérico)  
- `montoExigible` - Monto exigible (numérico)
- `diaCobro` - Día del cobro (numérico, 1-31)
- `horaCobro` - Hora del cobro (numérico, 0-23)

### Ejemplo de archivo CSV válido:
```csv
montoCobrar,montoCobrado,montoExigible,diaCobro,horaCobro
1000,800,1200,15,14
1500,1500,1800,20,16
2000,1800,2200,10,9
```

## 🛠️ Solución de Problemas

### Error: Modelos no encontrados
```bash
# Verificar que los archivos estén en la ubicación correcta
dir backend\*.h5
dir backend\*.pkl
```

### Error: Puerto en uso
```bash
# Cambiar puerto en backend/app.py
app.run(debug=True, port=5001)
```

### Error: Dependencias frontend
```bash
cd frontend
rm -rf node_modules
npm install
```

### Error: Entorno virtual
```bash
cd backend
rmdir /s venv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## 🚀 Scripts Disponibles

- `setup.bat` - Configuración inicial completa
- `start_full_app.bat` - Inicia backend y frontend
- `run_server.bat` - Solo inicia backend Flask
- `clean_for_repo.bat` - Limpia proyecto para subir a repositorio

## 📱 Funcionalidades de la Aplicación

### Backend (Flask API)
- ✅ Endpoint `/predict` para procesamiento de CSV
- ✅ Validación de columnas requeridas
- ✅ Manejo de errores robusto
- ✅ CORS configurado para desarrollo
- ✅ Soporte para archivos CSV hasta 10MB

### Frontend (React + TypeScript)
- ✅ Interfaz moderna y responsiva
- ✅ Carga de archivos drag & drop
- ✅ Tabla interactiva de resultados
- ✅ Manejo de estados de carga
- ✅ Validación de archivos CSV
- ✅ Mensajes de error descriptivos

## 🎯 Próximos Pasos

1. **Desarrollo Local**: Continúa desarrollando con la configuración actual
2. **Entrenamiento**: Usa Google Colab para reentrenar modelos
3. **Testing**: Prueba con diferentes archivos CSV
4. **Deployment**: Sube a Heroku/Vercel cuando esté listo
5. **Monitoring**: Implementa logs y métricas de uso

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollar en VSCode** con hot reload activo
2. **Entrenar modelos en Colab** cuando necesites mejorar precisión
3. **Descargar modelos actualizados** y copiar a backend/
4. **Probar predicciones** con datos reales
5. **Iterar** mejorando frontend/backend según necesidades

## 📞 Support

Si encuentras problemas:
1. Revisa este documento de instrucciones
2. Verifica que todos los archivos estén en las ubicaciones correctas
3. Consulta los logs de error en consola
4. Revisa el archivo CONTRIBUTING.md para debugging avanzado
