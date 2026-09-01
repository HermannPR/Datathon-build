# Datathon – Predicción de Cobros

Aplicación para predecir ahorros, ganancias y mejores emisoras a partir de datos de cobros financieros.

## Overview

Proyecto de Data Science (Datathon) que toma un archivo CSV de operaciones financieras y devuelve predicciones de cobro para ayudar a decidir dónde concentrar esfuerzos. Combina un backend de predicción en Flask con un frontend React para subir, procesar y visualizar resultados.

## Tech Stack

- Backend: Flask, Flask-CORS, pandas, TensorFlow, scikit-learn, joblib, numpy.
- Frontend: React, TypeScript, Vite.
- Datos: archivos CSV (ver `backend/datos_ejemplo.csv`).

## Key Features

- API REST en Flask para procesar predicciones.
- Modelos de regresión y clasificación con TensorFlow / scikit-learn.
- Carga y análisis de archivos CSV.
- Frontend React con tablas interactivas de resultados.

## Getting Started

Scripts de Windows incluidos: `setup.bat` (instala y prepara), `start_full_app.bat` (arranca backend + frontend), `run_server.bat` (solo backend).

Manual:

```bash
# Backend
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Frontend (en otra terminal)
cd frontend
npm install
npm run dev
```

## Status

Prototipo / proyecto de Datathon (2025). Verificación manual con datos de ejemplo; sin suite de pruebas automatizada.
