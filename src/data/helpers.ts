import type { Dish, Pairing, GlossaryItem, DietFlag } from "./types";

export const DIET_FLAGS: { key: DietFlag; label: string; emoji: string }[] = [
    { key: "seafood", label: "Seafood", emoji: "🐟" },
    { key: "vegetarian", label: "Vegetarian", emoji: "🥬" },
    { key: "pork", label: "Pork", emoji: "🐷" },
    { key: "beef", label: "Beef", emoji: "🥩" },
    { key: "creamy", label: "Creamy", emoji: "🥛" },
    { key: "spicy", label: "Spicy", emoji: "🌶️" }
];

export function normalize(s: string): string {
    return s.toLowerCase().trim();
}

export function dishHaystack(d: Dish): string {
    const p = d.pairings[0];
    return [
        d.cuisine, d.name, d.blurb,
        d.flags.join(" "),
        p.category, p.subdivision, p.idealBottle, p.equivalents.join(" ")
    ].join(" | ").toLowerCase();
}

export function matchesDishQuery(d: Dish, q: string): boolean {
    if (!q.trim()) return true;
    return dishHaystack(d).includes(normalize(q));
}

export function buildBottleIndex(dishes: Dish[]): string[] {
    const set = new Set<string>();
    for (const d of dishes) {
        for (const p of d.pairings) {
            set.add(p.idealBottle);
            set.add(p.equivalents[0]);
            set.add(p.equivalents[1]);
        }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function buildGlossaryFromDishes(dishes: Dish[]): GlossaryItem[] {
    const map = new Map<string, GlossaryItem>();
    for (const d of dishes) {
        for (const p of d.pairings) {
            const title = p.subdivision;
            const slug = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
            if (!map.has(title)) {
                map.set(title, {
                    slug,
                    title,
                    tag: p.category === "Red" ? "Reds" : p.category === "White" ? "Whites" : "Pairing 101",
                    body: p.why,
                    examples: [p.idealBottle]
                });
            }
        }
    }
    return Array.from(map.values()).sort((a, b) => a.title.localeCompare(b.title));
}
