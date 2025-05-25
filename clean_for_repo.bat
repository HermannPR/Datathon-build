@echo off
echo 🧹 Limpiando proyecto para subir a repositorio...
echo.

echo 📁 Eliminando carpetas de dependencias...
if exist "backend\venv" (
    rmdir /s /q "backend\venv"
    echo ✅ Eliminado backend\venv
)

if exist "frontend\node_modules" (
    rmdir /s /q "frontend\node_modules"
    echo ✅ Eliminado frontend\node_modules
)

if exist "frontend\dist" (
    rmdir /s /q "frontend\dist"
    echo ✅ Eliminado frontend\dist
)

echo.
echo 🗑️ Eliminando archivos temporales...
if exist "backend\*.pyc" (
    del /q "backend\*.pyc"
    echo ✅ Eliminados archivos .pyc
)

if exist "backend\__pycache__" (
    rmdir /s /q "backend\__pycache__"
    echo ✅ Eliminado __pycache__
)

if exist "uploads\*.csv" (
    del /q "uploads\*.csv"
    echo ✅ Eliminados CSVs temporales de uploads
)

echo.
echo 🔐 Verificando archivos sensibles...
if exist "backend\*.h5" (
    echo ⚠️  ATENCIÓN: Se encontraron archivos .h5 en backend/
    echo    Estos archivos son grandes y deben descargarse por separado
    echo    Considera subirlos a Google Drive o similar
)

if exist "backend\*.pkl" (
    echo ⚠️  ATENCIÓN: Se encontraron archivos .pkl en backend/
    echo    Estos archivos deben descargarse por separado desde Colab
)

if exist ".env" (
    echo ⚠️  ATENCIÓN: Archivo .env encontrado
    echo    Asegúrate de que no contenga información sensible
)

echo.
echo 📋 Archivos que DEBES incluir en el repositorio:
echo    ✅ README.md
echo    ✅ .gitignore
echo    ✅ backend/app.py
echo    ✅ backend/requirements.txt
echo    ✅ frontend/src/
echo    ✅ frontend/package.json
echo    ✅ scripts de configuración (.bat)

echo.
echo 📋 Archivos que NO debes incluir:
echo    ❌ backend/venv/
echo    ❌ frontend/node_modules/
echo    ❌ backend/*.h5 (archivos de modelos grandes)
echo    ❌ backend/*.pkl (archivos de modelos)
echo    ❌ uploads/*.csv (archivos temporales)
echo    ❌ .env (si contiene datos sensibles)

echo.
echo 📝 Pasos siguientes:
echo    1. Revisar que .gitignore esté configurado correctamente
echo    2. Hacer git add . y git commit
echo    3. Crear repositorio en GitHub/GitLab
echo    4. Hacer git push
echo    5. Documentar en README cómo descargar modelos

echo.
echo ✅ Limpieza completada. Proyecto listo para repositorio!
pause
