import React from "react";
import type { Dish, GlossaryItem } from "../data/types";

export function DishRowCard({ dish, onOpen }: { dish: Dish; onOpen: () => void }) {
    const tags = dish.flags.slice(0, 2);

    return (
        <div className="group relative bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-primary/30 transition-all">
            <div className="flex h-32">
                <div className="w-32 h-full flex-shrink-0 relative overflow-hidden bg-black/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,17,50,0.25),transparent_60%)]" />
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">{dish.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                            {dish.blurb}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex gap-2">
                            {tags.length === 0 ? (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                                    Classic
                                </span>
                            ) : (
                                tags.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {t}
                                    </span>
                                ))
                            )}
                        </div>

                        <button
                            onClick={onOpen}
                            className="w-8 h-8 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                            aria-label="Open pairing"
                        >
                            <span className="material-icons-round text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GlossaryCard({ item, onOpen }: { item: GlossaryItem; onOpen: () => void }) {
    return (
        <button
            onClick={onOpen}
            className="w-full text-left bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-slate-100 dark:border-white/5 active:scale-[0.99] transition-transform duration-200"
            aria-label={`Open glossary: ${item.title}`}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons-round text-2xl">menu_book</span>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start gap-3">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {item.tag}
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.body}
                    </p>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide mt-3 inline-block">
                        Learn More
                    </span>
                </div>
            </div>
        </button>
    );
}
