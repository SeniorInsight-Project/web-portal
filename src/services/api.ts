import { API_BASE_URL } from '../config'

export type HealthResponse = {
  status: string
  [key: string]: unknown
}

export async function fetchBackendHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status}`)
  }

  return (await response.json()) as HealthResponse
}
