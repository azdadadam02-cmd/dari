import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LangProvider } from './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* LangProvider: l'logha (fr / ar) katwsal l ga3 les pages */}
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>
)
