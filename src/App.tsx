import { ProductContextProvider } from './contexts/productContext'
import ProductContainer from './components/ProductContainer'

function App() {
  return (
    <ProductContextProvider>
      <ProductContainer />
    </ProductContextProvider>
  )
}

export default App
