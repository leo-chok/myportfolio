import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'nes.css/css/nes.min.css';
import './index.css'
import { FontProvider } from './context/FontContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FontProvider>
    <App />
  </FontProvider>
  </StrictMode>,
)
