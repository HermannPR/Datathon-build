@echo off
echo 🚀 Iniciando servidor de Datathon...

cd backend

echo 🔧 Activando entorno virtual...
call venv\Scripts\activate.bat

echo 🌐 Ejecutando Flask...
python app.py
