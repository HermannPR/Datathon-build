# 🌐 Frontend React - Predicción de Cobros - Datathon

Interfaz web moderna para la aplicación de predicción de cobros, construida con React + TypeScript + Vite.

## 🚀 Configuración Rápida

### 1. Instalar dependencias:
```bash
cd frontend
npm install
```

### 2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:5173

## 📋 Características

- 📤 **Carga de archivos CSV** con interfaz intuitiva
- 📊 **Visualización de resultados** en tabla interactiva
- 🎨 **Interfaz moderna** y responsiva
- ⚡ **Tiempo real** - Resultados instantáneos
- 🔗 **Integración automática** con backend Flask

## 🏗️ Arquitectura

```
frontend/
├── src/
│   ├── components/
│   │   ├── UploadForm.tsx      # Formulario de carga
│   │   └── ResultsTable.tsx    # Tabla de resultados
│   ├── api/
│   │   └── cobros.ts           # Cliente API para backend
│   ├── App.tsx                 # Componente principal
│   └── main.tsx                # Punto de entrada
├── .env                        # Variables de entorno
└── vite.config.ts             # Configuración de Vite
```

## 📊 Flujo de Uso

1. **Subir CSV**: Selecciona un archivo con las columnas requeridas
2. **Procesar**: El archivo se envía al backend Flask
3. **Visualizar**: Los resultados aparecen en una tabla interactiva
4. **Analizar**: Revisa predicciones de ahorro, ganancia y mejor emisora

## 📁 Formato de Archivo CSV Requerido

```csv
montoCobrar,montoCobrado,montoExigible,diaCobro,horaCobro
1000,800,1200,15,14
1500,1500,1800,20,16
```

## 🔗 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción  
npm run preview      # Preview del build
npm run lint         # Linter ESLint
```

## 🛠️ Troubleshooting

**Error: Cannot connect to backend**
- Verifica que el backend Flask esté ejecutándose en puerto 5000
- Revisa la variable `VITE_API_URL` en `.env`

**Error: CORS**
- El backend debe tener flask-cors configurado
- Verifica que el backend permita requests desde localhost:5173
