import CurrencySelect from "../components/CurrencySelect";
import Header from "../components/Header";
import ProductPage from "./pages/ProductPage";
import { useThemeStore } from "./store/ThemeStore"
import { useCurrencyStore } from "./store/CurrencyStore";
import { useEffect } from "react";
import { useCurrencyActions } from "./hooks/useCurrencyActions";


const StoreRootContainer: React.FC = () => {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const currency = useCurrencyStore((state) => state.currency);
    const currencies = useCurrencyStore((state) => state.currencies);
    const {setCurrency, loadCurrencies} = useCurrencyActions();

    useEffect(()=>{
        loadCurrencies('USD')
    }, [])

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
    );
}

export default StoreRootContainer;
