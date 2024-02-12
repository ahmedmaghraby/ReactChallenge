import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import './i18n.tsx'
import Loader from '@/components/atom/Loader.tsx'

// type from vite-plugin-pages/client-react
import routes from '~react-pages'
import './assets/CSS/index.css'

export function App() {
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
