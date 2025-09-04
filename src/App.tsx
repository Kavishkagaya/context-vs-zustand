import ProductPage from './pages/ProductPage'
import { useThemeContext } from './contexts/ThemeContext.tsx'
import Header from './components/Header.tsx'

function App() {
  const { theme, toggleTheme } = useThemeContext()
  return (
    <main className={theme}>
      <Header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Header>
      <ProductPage />
    </main>
  )
}

export default App
