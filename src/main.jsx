import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ready } from './i18n.js'
import './index.css'
import App from './App.jsx'

ready.then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
