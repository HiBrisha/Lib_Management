import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate } from 'react-router-dom'
import AppRoutes from './controller/Routes'
import './styles/index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigate to="/Login" replace />
      <AppRoutes/>
    </BrowserRouter>
  </StrictMode>
)
