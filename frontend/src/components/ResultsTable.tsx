import React from 'react';
import type { ApiResponse } from '../api/cobros';

interface Props {
  data: ApiResponse | null;
}

export default function ResultsTable({ data }: Props) {
  if (!data || !data.predictions || data.predictions.length === 0) return null;

  const { predictions, total_predictions, summary } = data;
  const headers = Object.keys(predictions[0]);

  // Filtrar columnas principales para mostrar primero
  const mainHeaders = headers.filter(h => 
    ['pred_ahorro', 'pred_ganancia', 'mejor_emisora_clase'].includes(h)
  );
  const otherHeaders = headers.filter(h => 
    !['pred_ahorro', 'pred_ganancia', 'mejor_emisora_clase'].includes(h)
  );

  const formatValue = (value: any, key: string) => {
    if (typeof value === 'number') {
      if (key.includes('prob_')) {
        return (value * 100).toFixed(1) + '%';
      }
      return Number(value).toFixed(2);
    }
    return value;
  };

  const getHeaderName = (key: string) => {
    switch (key) {
      case 'pred_ahorro': return '💰 Predicción Ahorro';
      case 'pred_ganancia': return '📊 Predicción Ganancia';
      case 'mejor_emisora_clase': return '🏦 Mejor Emisora';
      case 'montoCobrar_original': return '💵 Monto a Cobrar';
      case 'montoCobrado_original': return '💳 Monto Cobrado';
      default:
        if (key.includes('prob_')) {
          return `📈 Prob. ${key.replace('prob_', '')}`;
        }
        return key;
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h3>📈 Resultados de Predicción</h3>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Total: {total_predictions} registros
        </div>
      </div>

      {/* Resumen */}
      {summary && (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#495057' }}>📊 Resumen</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <div>
              <strong>💰 Ahorro promedio:</strong> {summary.avg_pred_ahorro.toFixed(2)}
            </div>
            <div>
              <strong>📈 Ganancia promedio:</strong> {summary.avg_pred_ganancia.toFixed(2)}
            </div>
            <div>
              <strong>🏦 Emisora más común:</strong> {summary.most_common_emisora}
            </div>
          </div>
        </div>
      )}

      {/* Tabla */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '1px solid #ddd',
          backgroundColor: 'white',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              {[...mainHeaders, ...otherHeaders].map((key) => (
                <th key={key} style={{
                  padding: '12px 8px',
                  textAlign: 'left',
                  borderBottom: '2px solid #ddd',
                  fontWeight: 'bold',
                  fontSize: '13px'
                }}>
                  {getHeaderName(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {predictions.map((row, idx) => (
              <tr key={idx} style={{
                backgroundColor: idx % 2 === 0 ? '#f8f9fa' : 'white'
              }}>
                {[...mainHeaders, ...otherHeaders].map((key) => (
                  <td key={key} style={{
                    padding: '10px 8px',
                    borderBottom: '1px solid #ddd'
                  }}>
                    {formatValue(row[key], key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
