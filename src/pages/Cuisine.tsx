import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DISHES } from "../data/seed";
import type { Dish, WineCategory } from "../data/types";
import { DishRowCard } from "../ui/Cards";

type Prefs = {
    prefer?: WineCategory; // Red/White/etc
    lowTannin: boolean;
};

function scoreDish(d: Dish, prefs: Prefs): number {
    let s = 0;
    const p = d.pairings[0];
    if (prefs.prefer) s += p.category === prefs.prefer ? 20 : -2;
    if (prefs.lowTannin) {
        if (p.category === "White" || p.category === "Sparkling" || p.category === "Rosé") s += 8;
        if (p.category === "Red") s -= 2;
    }
    return s;
}

export default function Cuisine() {
    const navigate = useNavigate();
    const { name } = useParams();
    const cuisine = (name as Dish["cuisine"]) || "French";

    const [prefs, setPrefs] = useState<Prefs>({ prefer: undefined, lowTannin: false });

    const items = useMemo(() => {
        const base = DISHES.filter((d) => d.cuisine === cuisine);
        return base
            .slice()
            .sort((a, b) => scoreDish(b, prefs) - scoreDish(a, prefs))
            .slice(0, 10);
    }, [cuisine, prefs]);

    return (
        <>
            <header className="sticky top-0 z-30 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 pt-12 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-gray-600 dark:text-gray-300"
                        aria-label="Back"
                    >
                        <span className="material-icons-round">chevron_left</span>
                    </button>
                    <button
                        onClick={() => navigate("/learn")}
                        className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-gray-600 dark:text-gray-300"
                        aria-label="Learn"
                    >
                        <span className="material-icons-round">menu_book</span>
                    </button>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{cuisine} Classics</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Select a dish to see the pairing result.</p>
            </header>

            <main className="flex-1 overflow-y-auto pb-24">
                <div className="px-6 py-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Preferences
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {(["Red", "White", "Sparkling"] as WineCategory[]).map((cat) => {
                            const on = prefs.prefer === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setPrefs((p) => ({ ...p, prefer: on ? undefined : cat }))}
                                    className={
                                        on
                                            ? "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md shadow-primary/20 active:scale-95"
                                            : "flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-surface-dark border border-transparent dark:border-gray-800 hover:border-primary/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium active:scale-95"
                                    }
                                >
                                    {on && <span className="material-icons-round text-base">check</span>}
                                    Prefer {cat}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setPrefs((p) => ({ ...p, lowTannin: !p.lowTannin }))}
                            className={
                                prefs.lowTannin
                                    ? "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md shadow-primary/20 active:scale-95"
                                    : "flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-surface-dark border border-transparent dark:border-gray-800 hover:border-primary/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium active:scale-95"
                            }
                        >
                            {prefs.lowTannin && <span className="material-icons-round text-base">check</span>}
                            Low Tannin
                        </button>
                    </div>
                </div>

                <div className="px-6 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top 10 Usual Dishes</h2>
                        <button
                            onClick={() => navigate("/")}
                            className="text-xs text-primary font-medium"
                        >
                            Home
                        </button>
                    </div>

                    {items.map((d) => (
                        <DishRowCard
                            key={d.id}
                            dish={d}
                            onOpen={() => navigate(`/result/${encodeURIComponent(d.id)}`)}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
