# 📝 Changelog - Datathon

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- [ ] Deployment a Heroku/Railway
- [ ] Autenticación de usuarios
- [ ] Histórico de predicciones
- [ ] Gráficos de visualización
- [ ] API de reentrenamiento
- [ ] Tests automatizados
- [ ] Docker containers

## [1.0.0] - 2025-05-25

### Added
- ✅ Backend Flask completo con API de predicciones
- ✅ Frontend React con TypeScript y Vite
- ✅ Integración completa backend-frontend
- ✅ Carga de archivos CSV
- ✅ Tabla interactiva de resultados
- ✅ Manejo de errores robusto
- ✅ Validación de archivos CSV
- ✅ Scripts de automatización (.bat)
- ✅ Documentación completa
- ✅ Configuración para repositorio Git
- ✅ Estructura de proyecto escalable

### Backend Features
- Endpoint `/predict` para procesamiento de CSV
- Soporte para modelos TensorFlow (.h5)
- Escaladores y encoders con pickle (.pkl)
- Validación de columnas requeridas
- CORS configurado para desarrollo
- Manejo de archivos hasta 10MB
- Respuestas JSON estructuradas

### Frontend Features
- Interfaz moderna con React 18
- TypeScript para type safety
- Componentes reutilizables
- Estados de carga y error
- Diseño responsivo
- Hot reload para desarrollo
- Integración con API backend

### Developer Experience
- Scripts de configuración automática
- Scripts de inicio rápido
- Documentación detallada para contribuidores
- Estructura de proyecto organizada
- Git workflows definidos
- Estándares de código establecidos

### Documentation
- README principal completo
- READMEs específicos para backend/frontend
- Guía de contribuidores (CONTRIBUTING.md)
- Instrucciones paso a paso
- Ejemplos de uso
- Troubleshooting guide

### Infrastructure
- .gitignore completo
- Configuración de entorno (.env.example)
- Scripts de limpieza
- Estructura de carpetas optimizada
- Configuración de VSCode workspace

## [0.3.0] - 2025-05-25

### Added
- Frontend React con componentes básicos
- Integración API cliente
- Tabla de resultados interactiva
- Manejo de estados

### Fixed
- Problemas de CORS entre frontend/backend
- Errores de PostCSS y TailwindCSS
- Configuración de Vite

## [0.2.0] - 2025-05-25

### Added
- Backend Flask funcional
- Endpoint de predicciones
- Carga de modelos ML
- Validación de datos CSV
- Manejo de errores

### Features
- Soporte para archivos .h5 y .pkl
- Procesamiento de pandas DataFrames
- Respuestas JSON estructuradas

## [0.1.0] - 2025-05-25

### Added
- Estructura inicial del proyecto
- Configuración de entornos virtuales
- Requirements.txt
- Scripts de automatización básicos
- Documentación inicial

### Infrastructure
- Carpetas backend/ y frontend/
- Scripts .bat para Windows
- Archivos de ejemplo

---

## Tipos de Cambios

- **Added** para nuevas funcionalidades
- **Changed** para cambios en funcionalidades existentes
- **Deprecated** para funcionalidades que serán removidas
- **Removed** para funcionalidades removidas
- **Fixed** para correcciones de bugs
- **Security** para correcciones de vulnerabilidades
