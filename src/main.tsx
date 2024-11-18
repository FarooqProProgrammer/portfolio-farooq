import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import "./assets/fonts/Satoshi/style.css"
import "./assets/fonts/chillax-webfont/style.css"
import '../node_modules/react-vertical-timeline-component/style.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
