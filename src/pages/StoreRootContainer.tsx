import CurrencySelect from "../components/CurrencySelect";
import Header from "../components/Header";
import ProductPage from "./ProductPage";
import {useThemeStore} from "../store/ThemeStore"
import { useCurrencyStore } from "../store/CurrencyStore";
import { useEffect } from "react";


const StoreRootContainer: React.FC = () => {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const currency = useCurrencyStore((state) => state.currency);
    const setCurrency = useCurrencyStore((state) => state.setCurrency);
    const currencies = useCurrencyStore((state) => state.currencies);
    const loadCurrencies = useCurrencyStore((state) => state.loadCurrencies);

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
            <ProductPage mode={"zustand"} />
        </main>
    );
}

export default StoreRootContainer;
