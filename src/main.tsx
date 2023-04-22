import { App } from '@/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Setup MSW
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./test/mocks/browser')
  worker.start()
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
