import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DISHES, EDUCATION } from "../data/seed";
import { buildGlossaryFromDishes } from "../data/helpers";

export default function LearnDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const items = useMemo(() => [...EDUCATION, ...buildGlossaryFromDishes(DISHES)], []);
    const item = useMemo(() => items.find((x) => x.slug === slug) || null, [items, slug]);

    return (
        <>
            <header className="px-6 pt-12 pb-4 border-b border-gray-200 dark:border-white/5">
                <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary">
                    <span className="material-icons-round">chevron_left</span> Back
                </button>
                <h1 className="text-2xl font-bold mt-2">Learn</h1>
            </header>

            <main className="flex-1 px-6 pb-24 pt-6">
                {!item ? (
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                        Item not found.
                    </div>
                ) : (
                    <div className="rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 p-6">
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">
                            {item.tag}
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{item.title}</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">{item.body}</p>

                        {item.examples?.length ? (
                            <div className="mt-6">
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Examples
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {item.examples.map((x) => (
                                        <span key={x} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                                            {x}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                )}
            </main>
        </>
    );
}
