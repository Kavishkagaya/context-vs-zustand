import { create } from "zustand";
import type { CurrencyStoreType } from "../../types";
import currencyLoader from "../../data/currencyLoader";

export const useCurrencyStore = create<CurrencyStoreType>((set, get) => ({
    currency: "USD",
    currencies: [],
    currencyList: {},

    actions: {
        setCurrency: (currency: string) => set({ currency }),

        loadCurrencies: async (baseCurrency: string) => {
            const rates = await currencyLoader(baseCurrency);
            set({ currencyList: rates, currencies: Object.keys(rates) });
        },

        currencyConverter: (price: number, currency: string) => {
            const { currencyList } = get();
            const rate = currencyList[currency];
            if (!rate) return price;
            return price * rate;
        },

        currencyFormatter: (price: number, currency: string) =>
            new Intl.NumberFormat("en-US", { style: "currency", currency }).format(price),
    }
}));
