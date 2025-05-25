import { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResultsTable from './components/ResultsTable';
import type { ApiResponse } from './api/cobros';
import './App.css'

function App() {
  const [results, setResults] = useState<ApiResponse | null>(null);

  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: "1400px", 
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ 
          color: "#333", 
          marginBottom: "0.5rem",
          fontSize: "2.5rem"
        }}>
          🏦 Predicción de Cobros - Datathon
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Sube un archivo CSV para obtener predicciones de ahorro, ganancia y mejor emisora
        </p>
      </header>
      
      <UploadForm onResults={setResults} />
      <ResultsTable data={results} />
      
      {!results && (
        <div style={{ 
          textAlign: "center", 
          padding: "40px", 
          color: "#999",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px"
        }}>
          <h3>🚀 ¡Comienza subiendo tu archivo CSV!</h3>
          <p>El archivo debe contener las columnas: <code>montoCobrar</code>, <code>montoCobrado</code>, <code>montoExigible</code>, <code>diaCobro</code>, <code>horaCobro</code></p>
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            <p><strong>📌 Notas importantes:</strong></p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>Asegúrate de que el backend Flask esté ejecutándose en puerto 5000</li>
              <li>Los modelos entrenados (.h5 y .pkl) deben estar en la carpeta backend/</li>
              <li>El archivo CSV no debe contener valores nulos</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
