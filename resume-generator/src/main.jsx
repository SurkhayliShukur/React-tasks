
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './context/LangContext.jsx'
import './utils/i18n.js'


createRoot(document.getElementById('root')).render(
  <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LangProvider>

)
