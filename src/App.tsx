import ProductPage from './pages/ProductPage'
import { useThemeContext } from './contexts/ThemeContext.tsx'
import Header from './components/Header.tsx'
import CurrencySelect from './components/CurrencySelect.tsx'
import { useCurrencyContext } from './contexts/CurrencyContext.tsx'

function App() {
  const { theme, toggleTheme } = useThemeContext()
  const { currency, setCurrency, currencies } = useCurrencyContext()
  return (
    <main className={theme}>
      <Header>
        <CurrencySelect
          selectedCurrency={currency}
          setSelectedCurrency={setCurrency}
          currencies={currencies}
        />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Header>
      <ProductPage />
    </main>
  )
}

export default App
