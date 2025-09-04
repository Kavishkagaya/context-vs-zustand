import { createContext, useContext, useMemo, useState } from "react";
import type { CurrencyContextType } from "../types";
import useCurrency from "../hooks/useCurrency";

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrency] = useState<string>("USD");
    const {currencyList} = useCurrency("USD");
    
    const currencyConverter = (price: number, currency: string) => {
        if (!currencyList) return price;

        const rate = currencyList[currency];
        if (!rate) return price;

        return price * rate;
    };

    const currencyFormatter = (price: number, currency: string) => {
        const priceText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
        }).format(price);
        return priceText;
    };

    const currencies = useMemo(() => {
        return Object.keys(currencyList || {});
    }, [currencyList]);

    return (
        <CurrencyContext.Provider value={{ currency, currencyConverter, currencyFormatter, setCurrency, currencies }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrencyContext = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrencyContext must be used within a CurrencyProvider");
    }
    return context;
};
