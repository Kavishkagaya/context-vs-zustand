import { useEffect, useState } from "react";
import currencyLoader from "../../api/currencyApi";

const useFetchCurrency = (baseCurrency: string) => {
    const [currencyList, setCurrencyList] = useState<Record<string, number>>({});

    
    useEffect(() => {
        const loadCurrencyList = async (baseCurrency: string) => {
            try {
                const rates = await currencyLoader(baseCurrency);
                setCurrencyList(rates);
            } catch (error) {
                console.error("Error loading currency list:", error);
            }
        };

        loadCurrencyList(baseCurrency);
    }, []);

    return {
        currencyList
    };
};

export default useFetchCurrency;