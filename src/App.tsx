import { ProductContextProvider } from './contexts/productContext'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <ProductContextProvider>
      <ProductPage />
    </ProductContextProvider>
  )
}

export default App
