import { CurrencyContextProvider } from './contexts/CurrencyContext'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <CurrencyContextProvider>
      <ProductPage />
    </CurrencyContextProvider>
  )
}

export default App
