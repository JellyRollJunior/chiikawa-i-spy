import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StartPage } from './components/StartPage/StartPage'
import './styles/reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StartPage />
  </StrictMode>,
)
