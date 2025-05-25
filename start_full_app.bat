@echo off
echo 🚀 Iniciando aplicación completa de Datathon...
echo.

echo 📦 Activando entorno virtual del backend...
cd backend
call venv\Scripts\activate.bat
echo ✅ Entorno virtual activado

echo.
echo 🔧 Iniciando servidor Flask en puerto 5000...
start "Backend Flask" cmd /k "python app.py"

cd ..\frontend
echo.
echo 🌐 Iniciando frontend React en puerto 5173...
start "Frontend React" cmd /k "npm run dev"

echo.
echo ✅ Aplicación iniciada completamente!
echo 📍 Backend: http://localhost:5000
echo 📍 Frontend: http://localhost:5173
echo.
pause
