@echo off
echo 🚀 Configurando entorno de Datathon...

cd backend

echo 📦 Creando entorno virtual...
python -m venv venv

echo 🔧 Activando entorno virtual...
call venv\Scripts\activate.bat

echo 📚 Instalando dependencias...
pip install -r requirements.txt

echo ✅ Configuración completada!
echo.
echo Para ejecutar el servidor:
echo 1. cd backend
echo 2. venv\Scripts\activate
echo 3. python app.py
echo.
pause
