import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './contexts/ThemeContext.tsx'
import { CurrencyContextProvider } from './contexts/CurrencyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <App />
      </CurrencyContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
