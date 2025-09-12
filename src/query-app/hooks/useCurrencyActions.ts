import { useCurrencyStore } from "../store/CurrencyStore";

export const useCurrencyActions = () => {
    return useCurrencyStore((state) => state.actions);
}