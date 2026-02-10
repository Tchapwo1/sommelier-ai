import React, { useState } from "react";
import { useAppState } from "../state/AppState";

export default function Cellar() {
    const { cellar, addBottle, removeBottle } = useAppState();
    const [label, setLabel] = useState("");

    return (
        <>
            <header className="px-6 pt-12 pb-4 border-b border-gray-200 dark:border-white/5">
                <h1 className="text-2xl font-bold">Cellar</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Add bottles you own (used by Pair my Wine).</p>
            </header>

            <main className="flex-1 px-6 pb-24 pt-6">
                <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Add bottle
                    </label>
                    <div className="mt-2 flex gap-2">
                        <input
                            className="flex-1 rounded-xl bg-white dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50"
                            placeholder="e.g., Albariño, Pazo de Señorans"
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                        />
                        <button
                            onClick={() => { addBottle(label); setLabel(""); }}
                            className="px-4 rounded-xl bg-primary text-white font-medium hover:bg-red-700 transition-colors"
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Your bottles</h2>
                    {cellar.length === 0 ? (
                        <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                            No bottles yet.
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {cellar.map((b) => (
                                <div key={b.id} className="rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold">{b.label}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            Added {new Date(b.addedAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeBottle(b.id)}
                                        className="w-9 h-9 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                        aria-label="Remove bottle"
                                    >
                                        <span className="material-icons-round">delete</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
