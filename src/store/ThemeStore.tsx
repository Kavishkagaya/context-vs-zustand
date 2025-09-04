import { create } from "zustand";
import type { ThemeStoreType } from "../types";

export const useThemeStore = create<ThemeStoreType>((set) => ({
    theme: "light",
    toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
}));
