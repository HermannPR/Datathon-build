export interface PredictionResult {
  pred_ahorro: number;
  pred_ganancia: number;
  mejor_emisora_clase: string;
  [key: string]: any; // Para campos adicionales como probabilidades
}

export interface ApiResponse {
  success: boolean;
  predictions: PredictionResult[];
  total_predictions: number;
  summary?: {
    avg_pred_ahorro: number;
    avg_pred_ganancia: number;
    most_common_emisora: string;
  };
  error?: string;
}

export async function postPredict(file: File): Promise<ApiResponse> {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
    method: "POST",
    body: form,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Error al procesar archivo");
  }

  return data;
}
