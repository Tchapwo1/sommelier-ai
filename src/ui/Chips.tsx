import React from "react";
import type { DietFlag } from "../data/types";
import { DIET_FLAGS } from "../data/helpers";

export function DietChips({
    active,
    onToggle
}: {
    active: Set<DietFlag>;
    onToggle: (k: DietFlag) => void;
}) {
    return (
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
            {DIET_FLAGS.map((f) => {
                const on = active.has(f.key);
                return (
                    <button
                        key={f.key}
                        onClick={() => onToggle(f.key)}
                        className={
                            on
                                ? "flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full whitespace-nowrap shadow-lg shadow-primary/20"
                                : "flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full whitespace-nowrap hover:border-primary/50 transition-colors"
                        }
                    >
                        <span className="text-lg">{f.emoji}</span>
                        <span className={on ? "text-sm font-medium" : "text-sm font-medium text-gray-600 dark:text-gray-300"}>
                            {f.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
