import { useEffect, useState } from 'react'
import { API_BASE_URL } from './config'
import { fetchBackendHealth } from './services/api'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking backend...')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await fetchBackendHealth()
        setStatus(`Connected (${data.status})`)
        setError(null)
      } catch (requestError) {
        setStatus('Not connected')
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unexpected error while contacting backend',
        )
      }
    }

    void checkHealth()
  }, [])

  return (
    <main className="app">
      <h1>SeniorInsight Web Portal</h1>
      <p className="subtitle">React website configured for a Java Spring backend.</p>

      <section className="status-card">
        <h2>Backend connectivity</h2>
        <p>
          <strong>API base URL:</strong> {API_BASE_URL}
        </p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={error ? 'status-error' : 'status-ok'}>{status}</span>
        </p>
        {error ? <p className="error-message">{error}</p> : null}
      </section>
    </main>
  )
}

export default App
