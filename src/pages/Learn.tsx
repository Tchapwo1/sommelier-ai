import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DISHES, EDUCATION } from "../data/seed";
import { buildGlossaryFromDishes, normalize } from "../data/helpers";
import { GlossaryCard } from "../ui/Cards";

export default function Learn() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [pill, setPill] = useState<"All" | "Pairing 101" | "Reds" | "Whites" | "Regions">("All");

    const glossary = useMemo(() => buildGlossaryFromDishes(DISHES), []);
    const items = useMemo(() => {
        let arr = [...EDUCATION, ...glossary];
        if (pill !== "All") arr = arr.filter((x) => x.tag === pill);
        if (q.trim()) {
            const s = normalize(q);
            arr = arr.filter((x) => (x.title + " " + x.body).toLowerCase().includes(s));
        }
        return arr;
    }, [glossary, q, pill]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 px-6 pt-12 pb-4">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Wine Education</h1>
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="material-icons-round text-primary">school</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-icons-round text-slate-400">search</span>
                    </div>
                    <input
                        className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white dark:bg-surface-dark text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="Search terms, grapes, or pairings..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
            </header>

            <div className="px-6 py-4">
                <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
                    {(["All", "Pairing 101", "Reds", "Whites", "Regions"] as const).map((x) => (
                        <button
                            key={x}
                            onClick={() => setPill(x)}
                            className={
                                pill === x
                                    ? "flex-none px-5 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md shadow-primary/20 active:scale-95"
                                    : "flex-none px-5 py-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-primary/10 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-primary/50 transition-colors"
                            }
                        >
                            {x}
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-1 px-6 pb-24 space-y-3">
                {items.map((it) => (
                    <GlossaryCard
                        key={it.slug}
                        item={it}
                        onOpen={() => navigate(`/learn/${it.slug}`)}
                    />
                ))}
            </main>
        </>
    );
}
