import React, { createContext, useContext, useMemo, useState } from "react";
import type { CellarBottle } from "../data/types";
import { readJSON, writeJSON } from "../lib/storage";

type AppState = {
    dark: boolean;
    setDark: (v: boolean) => void;

    savedDishIds: Set<string>;
    toggleSaved: (dishId: string) => boolean; // returns new saved state
    isSaved: (dishId: string) => boolean;

    cellar: CellarBottle[];
    addBottle: (label: string) => void;
    removeBottle: (id: string) => void;
};

const SAVED_KEY = "sommelier:saved:v1";
const CELLAR_KEY = "sommelier:cellar:v1";
const THEME_KEY = "sommelier:theme:v1";

const Ctx = createContext<AppState | null>(null);

function applyThemeClass(dark: boolean) {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDarkState] = useState<boolean>(() => readJSON(THEME_KEY, true));
    const [saved, setSaved] = useState<Set<string>>(() => new Set(readJSON<string[]>(SAVED_KEY, [])));
    const [cellar, setCellar] = useState<CellarBottle[]>(() => readJSON<CellarBottle[]>(CELLAR_KEY, []));

    // apply theme on first render
    React.useEffect(() => {
        applyThemeClass(dark);
    }, []); // eslint-disable-line

    const setDark = (v: boolean) => {
        setDarkState(v);
        writeJSON(THEME_KEY, v);
        applyThemeClass(v);
    };

    const toggleSaved = (dishId: string) => {
        let isNowSaved = false;
        setSaved((prev) => {
            const next = new Set(prev);
            if (next.has(dishId)) next.delete(dishId);
            else {
                next.add(dishId);
                isNowSaved = true;
            }
            writeJSON(SAVED_KEY, Array.from(next));
            return next;
        });
        return isNowSaved;
    };

    const isSaved = (dishId: string) => saved.has(dishId);

    const addBottle = (label: string) => {
        const trimmed = label.trim();
        if (!trimmed) return;
        const bottle: CellarBottle = { id: crypto.randomUUID(), label: trimmed, addedAt: Date.now() };
        setCellar((prev) => {
            const next = [bottle, ...prev];
            writeJSON(CELLAR_KEY, next);
            return next;
        });
    };

    const removeBottle = (id: string) => {
        setCellar((prev) => {
            const next = prev.filter((b) => b.id !== id);
            writeJSON(CELLAR_KEY, next);
            return next;
        });
    };

    const value = useMemo<AppState>(
        () => ({ dark, setDark, savedDishIds: saved, toggleSaved, isSaved, cellar, addBottle, removeBottle }),
        [dark, saved, cellar]
    );

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState(): AppState {
    const v = useContext(Ctx);
    if (!v) throw new Error("useAppState must be used within AppStateProvider");
    return v;
}
