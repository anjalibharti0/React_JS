import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PropsPractice from './PropsPractice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsPractice />
  </StrictMode>,
)
