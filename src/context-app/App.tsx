import { CurrencyContextProvider } from "./contexts/CurrencyContext"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import RootContainer from "./RootContainer"

const App: React.FC = () => {
    return (
        <ThemeContextProvider>
            <CurrencyContextProvider>
                <RootContainer />
            </CurrencyContextProvider>
        </ThemeContextProvider>
    )
}

export default App