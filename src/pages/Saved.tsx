import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DISHES } from "../data/seed";
import { useAppState } from "../state/AppState";

export default function Saved() {
    const navigate = useNavigate();
    const { savedDishIds, toggleSaved } = useAppState();

    const items = useMemo(() => DISHES.filter((d) => savedDishIds.has(d.id)), [savedDishIds]);

    return (
        <>
            <header className="px-6 pt-12 pb-4 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Saved</h1>
                    <button
                        onClick={() => navigate("/learn")}
                        className="text-xs font-medium text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Learn
                    </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {items.length} saved pairing{items.length === 1 ? "" : "s"}
                </p>
            </header>

            <main className="flex-1 overflow-y-auto pb-24 px-6 pt-4">
                {items.length === 0 ? (
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                        No saved pairings yet. Tap the bookmark on a result to save it.
                    </div>
                ) : (
                    <div className="space-y-3">
                        {items.map((d) => (
                            <div key={d.id} className="rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3">
                                <div className="flex justify-between items-start gap-3">
                                    <button className="text-left flex-1" onClick={() => navigate(`/result/${encodeURIComponent(d.id)}`)}>
                                        <div className="font-semibold">{d.name}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            {d.cuisine} • {d.pairings[0].category} • {d.pairings[0].subdivision}
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => toggleSaved(d.id)}
                                        className="w-9 h-9 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                        aria-label="Remove"
                                    >
                                        <span className="material-icons-round text-lg">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
