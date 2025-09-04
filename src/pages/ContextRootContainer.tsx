import CurrencySelect from "../components/CurrencySelect";
import Header from "../components/Header";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import { ProductContextProvider } from "../contexts/ProductContext";
import { useThemeContext } from "../contexts/ThemeContext";
import ProductPage from "./ProductPage";


const ContextRootContainer: React.FC = () => {
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
            <ProductContextProvider>
                <ProductPage mode="context" />
            </ProductContextProvider>
        </main>
    );
}

export default ContextRootContainer;
