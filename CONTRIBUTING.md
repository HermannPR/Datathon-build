# 👨‍💻 Guía para Contribuidores - Datathon

## 🚀 Configuración del Entorno de Desarrollo

### Prerrequisitos
- Python 3.8+
- Node.js 16+
- Git

### Configuración Inicial
1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPO]
   cd DATATHON
   ```

2. **Configurar backend**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```

3. **Configurar frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Copiar modelos entrenados**
   - Coloca los archivos `.h5` y `.pkl` en `backend/`
   - Los archivos requeridos están listados en el README principal

## 📁 Estructura de Archivos

```
DATATHON/
├── backend/              # API Flask
│   ├── app.py           # Punto de entrada principal
│   ├── models/          # Lógica de modelos ML (si se expande)
│   ├── utils/           # Utilidades y helpers
│   └── tests/           # Pruebas del backend
├── frontend/            # App React
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas de la app
│   │   ├── hooks/       # Custom hooks
│   │   ├── utils/       # Utilidades frontend
│   │   └── types/       # Definiciones TypeScript
│   └── tests/           # Pruebas del frontend
├── docs/                # Documentación adicional
├── scripts/             # Scripts de automatización
└── data/                # Datos de ejemplo y pruebas
```

## 🔧 Comandos de Desarrollo

### Backend
```bash
# Activar entorno virtual
venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor de desarrollo
python app.py

# Ejecutar tests
python -m pytest tests/

# Generar requirements.txt
pip freeze > requirements.txt
```

### Frontend
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar tests
npm test

# Linting y formato
npm run lint
npm run format
```

## 🎯 Estándares de Código

### Python (Backend)
- Usar **Black** para formateo automático
- Seguir **PEP 8** para convenciones
- Documentar funciones con **docstrings**
- Usar **type hints** cuando sea posible

```python
def predict_savings(data: pd.DataFrame) -> List[float]:
    """
    Predice ahorros basado en datos de cobros.
    
    Args:
        data: DataFrame con columnas requeridas
        
    Returns:
        Lista de predicciones de ahorro
    """
    # Implementación aquí
    pass
```

### TypeScript (Frontend)
- Usar **TypeScript estricto**
- Seguir convenciones de **React Hooks**
- Componentes funcionales con **props tipadas**
- Usar **ESLint** y **Prettier**

```typescript
interface PredictionResult {
  pred_ahorro: number;
  pred_ganancia: number;
  mejor_emisora_clase: string;
}

const ResultsTable: React.FC<{ data: PredictionResult[] }> = ({ data }) => {
  // Implementación del componente
};
```

## 🧪 Testing

### Backend Tests
```bash
# Estructura de tests
backend/tests/
├── test_app.py          # Tests de endpoints
├── test_models.py       # Tests de modelos ML
└── conftest.py          # Configuración pytest

# Ejecutar tests específicos
python -m pytest tests/test_app.py::test_predict_endpoint
```

### Frontend Tests
```bash
# Estructura de tests
frontend/src/__tests__/
├── components/          # Tests de componentes
├── utils/              # Tests de utilidades
└── integration/        # Tests de integración

# Ejecutar tests
npm test
npm test -- --watch
npm test -- --coverage
```

## 📝 Convenciones de Commits

Usar **Conventional Commits**:

```
feat: nueva funcionalidad de predicción batch
fix: corregir error de validación CSV
docs: actualizar README con nuevos endpoints
style: formatear código con black
refactor: reorganizar componentes React
test: agregar tests para API de predicción
chore: actualizar dependencias
```

## 🔄 Flujo de Trabajo Git

1. **Crear rama para nueva feature**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar y hacer commits**
   ```bash
   git add .
   git commit -m "feat: implementar nueva funcionalidad"
   ```

3. **Mantener actualizada con main**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

4. **Push y crear Pull Request**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

## 🐛 Debugging

### Backend
```python
# Activar debug mode en Flask
app.run(debug=True)

# Logging personalizado
import logging
logging.basicConfig(level=logging.DEBUG)
```

### Frontend
```typescript
// Debug en desarrollo
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}

// React DevTools
// Instalar React Developer Tools en el navegador
```

## 📊 Monitoreo y Performance

### Backend
- Usar **Flask-Profiler** para análisis de performance
- Monitorear uso de memoria en predicciones
- Implementar logging de errores

### Frontend
- Usar **React DevTools Profiler**
- Optimizar re-renders con `useMemo` y `useCallback`
- Implementar lazy loading para componentes pesados

## 🚀 Deployment

### Backend (Heroku/Railway)
```bash
# Configurar Procfile
echo "web: python app.py" > Procfile

# Variables de entorno
export FLASK_ENV=production
export PORT=$PORT
```

### Frontend (Vercel/Netlify)
```bash
# Build para producción
npm run build

# Variables de entorno
VITE_API_URL=https://tu-backend.herokuapp.com
```

## 📚 Recursos Adicionales

- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TensorFlow.js Guide](https://www.tensorflow.org/js)

## 💡 Tips de Desarrollo

1. **Mantén los modelos actualizados** - Descarga nuevos modelos de Colab regularmente
2. **Usa hot reloading** - Tanto Flask como Vite soportan recarga automática
3. **Testea con datos reales** - Usa CSVs de ejemplo similares a producción
4. **Documenta cambios** - Actualiza README cuando agregues nuevas features
5. **Optimiza predicciones** - Cachea resultados cuando sea posible

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📞 Contacto

Para preguntas o sugerencias, contacta al equipo de desarrollo.
