export type DietFlag = "seafood" | "vegetarian" | "pork" | "beef" | "creamy" | "spicy";
export type WineCategory = "Red" | "White" | "Rosé" | "Sparkling" | "Dessert" | "Fortified";

export type Pairing = {
    category: WineCategory;
    subdivision: string;     // "Albariño (Rías Baixas)"
    why: string;             // explanation
    idealBottle: string;     // specific bottle
    equivalents: [string, string]; // exactly two
};

export type Dish = {
    id: string;              // stable id
    cuisine: "French" | "Portuguese" | "Italian" | "Spanish" | "English";
    name: string;
    blurb: string;
    flags: DietFlag[];
    // strong foundation: we can support multiple options (prefs can swap)
    pairings: Pairing[];     // pairings[0] is default
};

export type GlossaryItem = {
    slug: string;
    title: string;
    tag: "Pairing 101" | "Reds" | "Whites" | "Regions";
    body: string;
    examples?: string[];
};

export type CellarBottle = {
    id: string;
    label: string; // name the user entered
    addedAt: number;
};
