export interface HealthResponse {
  readonly status: "ok" | "degraded" | "error";
  readonly service: string;
  readonly django_version: string;
  readonly python_version: string;
}

export const DEFAULT_API_BASE_URL = "http://localhost:8000/api";

export async function fetchBackendHealth(
  baseUrl: string = DEFAULT_API_BASE_URL,
): Promise<HealthResponse> {
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/health/`);
  if (!response.ok) {
    throw new Error(`Health check failed with HTTP ${String(response.status)}`);
  }
  return (await response.json()) as HealthResponse;
}
