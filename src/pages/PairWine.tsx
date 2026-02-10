import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DISHES } from "../data/seed";
import { buildBottleIndex, matchesDishQuery } from "../data/helpers";
import { useAppState } from "../state/AppState";

export default function PairWine() {
    const navigate = useNavigate();
    const { cellar } = useAppState();
    const [selected, setSelected] = useState("");
    const [q, setQ] = useState("");

    const allBottles = useMemo(() => buildBottleIndex(DISHES), []);
    const cellarBottles = useMemo(() => cellar.map((b) => b.label), [cellar]);

    const matches = useMemo(() => {
        if (!selected) return [];
        return DISHES.filter((d) => {
            return d.pairings.some((p) =>
                p.idealBottle === selected || p.equivalents.includes(selected as any)
            );
        }).filter((d) => matchesDishQuery(d, q));
    }, [selected, q]);

    return (
        <>
            <header className="px-6 pt-12 pb-4 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-gray-600 dark:text-gray-300"
                        aria-label="Back"
                    >
                        <span className="material-icons-round">chevron_left</span>
                    </button>
                    <div className="text-right">
                        <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Pair my Wine</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Reverse match</div>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto pb-24 px-6">
                <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Choose a bottle
                    </label>

                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="mt-2 w-full rounded-xl bg-white dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50"
                    >
                        <option value="">Select bottle…</option>

                        {cellarBottles.length > 0 && (
                            <optgroup label="From your cellar">
                                {cellarBottles.map((b) => (
                                    <option key={`cellar:${b}`} value={b}>{b}</option>
                                ))}
                            </optgroup>
                        )}

                        <optgroup label="Dataset bottles">
                            {allBottles.map((b) => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                <div className="mt-4">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-400 group-focus-within:text-primary transition-colors">
                                search
                            </span>
                        </div>
                        <input
                            className="block w-full pl-11 pr-4 py-4 rounded-xl bg-white dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition-all"
                            placeholder="Filter matched dishes..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between items-end mb-3">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Matching dishes</h2>
                        <span className="text-xs text-primary font-medium">{selected ? matches.length : 0}</span>
                    </div>

                    {!selected ? (
                        <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                            Pick a bottle to see dishes that fit it. Add bottles in Cellar if you want.
                        </div>
                    ) : matches.length === 0 ? (
                        <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                            No matches found. Try searching by dish name in Home.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {matches.map((d) => (
                                <button
                                    key={d.id}
                                    onClick={() => navigate(`/result/${encodeURIComponent(d.id)}`)}
                                    className="w-full text-left rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex justify-between items-start gap-3">
                                        <div>
                                            <div className="font-semibold">{d.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                {d.cuisine} • {d.pairings[0].category} • {d.pairings[0].subdivision}
                                            </div>
                                        </div>
                                        <span className="material-icons-round text-primary">arrow_forward</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
