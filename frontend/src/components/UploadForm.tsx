import React, { useState } from 'react';
import { postPredict } from '../api/cobros';
import type { ApiResponse } from '../api/cobros';

interface Props {
  onResults: (data: ApiResponse) => void;
}

export default function UploadForm({ onResults }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    
    try {
      const results = await postPredict(file);
      onResults(results);
    } catch (err: any) {
      setError(err.message || 'Error al enviar archivo');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    setFile(selectedFile);
    setError(null); // Limpiar errores al seleccionar nuevo archivo
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px dashed #ccc', 
      borderRadius: '8px', 
      textAlign: 'center',
      marginBottom: '20px',
      backgroundColor: '#fafafa'
    }}>
      <h3>📊 Cargar archivo CSV para predicción</h3>
      <p style={{ color: '#666', margin: '10px 0' }}>
        Columnas requeridas: montoCobrar, montoCobrado, montoExigible, diaCobro, horaCobro
      </p>
      
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ 
          margin: '10px',
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <br />
      
      <button 
        onClick={handleSubmit} 
        disabled={!file || loading}
        style={{
          padding: '12px 24px',
          backgroundColor: file && !loading ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: file && !loading ? 'pointer' : 'not-allowed',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        {loading ? "🔄 Procesando..." : "🚀 Subir y predecir"}
      </button>
      
      {file && (
        <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
          📁 Archivo seleccionado: <strong>{file.name}</strong> ({(file.size / 1024).toFixed(1)} KB)
        </p>
      )}
      
      {error && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          ❌ {error}
        </div>
      )}
    </div>
  );
}
