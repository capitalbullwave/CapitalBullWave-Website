import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}