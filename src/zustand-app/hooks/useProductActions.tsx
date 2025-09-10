import { useProductStore } from "../store/ProductStore";

export const useProductActions = () => {
    return useProductStore((state) => state.actions);
}