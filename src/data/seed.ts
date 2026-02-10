import type { Dish, Pairing, GlossaryItem } from "./types";

const P = (category: Pairing["category"], subdivision: string, why: string, idealBottle: string, equivalents: [string, string]): Pairing => ({
    category, subdivision, why, idealBottle, equivalents
});

const id = (cuisine: Dish["cuisine"], name: string) => `${cuisine}::${name}`;

// --- Dishes (50) ---
export const DISHES: Dish[] = [
    // French (10)
    {
        id: id("French", "Steak frites"),
        cuisine: "French",
        name: "Steak frites",
        blurb: "Bistro classic with seared beef and fries.",
        flags: ["beef"],
        pairings: [
            P("Red", "Bordeaux Left Bank (Cabernet-led)", "Cabernet structure matches beef fat; savory notes echo the sear.", "Château Lanessan, Haut-Médoc", ["Château Meyney, Saint-Estèphe", "Château Cantemerle, Haut-Médoc"])
        ]
    },
    {
        id: id("French", "Coq au vin"),
        cuisine: "French",
        name: "Coq au vin",
        blurb: "Braised chicken in red wine with mushrooms.",
        flags: [],
        pairings: [
            P("Red", "Burgundy Pinot Noir (earthy, high-acid)", "Pinot's acidity and earthiness lift braised chicken and mushroomy sauce.", "Joseph Drouhin, Côte de Beaune Pinot Noir", ["Louis Jadot, Bourgogne Pinot Noir", "Faiveley, Bourgogne Pinot Noir"])
        ]
    },
    {
        id: id("French", "Boeuf bourguignon"),
        cuisine: "French",
        name: "Boeuf bourguignon",
        blurb: "Slow-cooked beef stew with red wine depth.",
        flags: ["beef"],
        pairings: [
            P("Red", "Red Burgundy (Pinot Noir, structured)", "Bright acidity cuts richness; savory red-fruit complements slow-cooked beef.", "Domaine Faiveley, Mercurey Rouge", ["Louis Jadot, Mercurey Rouge", "Bouchard Père & Fils, Beaune du Château Rouge"])
        ]
    },
    {
        id: id("French", "Bouillabaisse"),
        cuisine: "French",
        name: "Bouillabaisse",
        blurb: "Provençal fish stew with saffron and garlic.",
        flags: ["seafood"],
        pairings: [
            P("White", "Provence / Southern Rhône White (aromatic, medium-bodied)", "Aromatic whites handle saffron/garlic; enough body for fish stew.", "Château La Nerthe, Châteauneuf-du-Pape Blanc", ["Domaine de la Janasse, Côtes du Rhône Blanc", "Domaine Tempier, Bandol Blanc"])
        ]
    },
    {
        id: id("French", "Sole meunière"),
        cuisine: "French",
        name: "Sole meunière",
        blurb: "Delicate fish with butter-lemon sauce.",
        flags: ["seafood", "creamy"],
        pairings: [
            P("White", "White Burgundy (Chardonnay, balanced)", "Chardonnay mirrors butter-lemon sauce; acidity keeps it precise.", "Louis Latour, Pouilly-Fuissé", ["Joseph Drouhin, Mâcon-Villages", "Bouchard Aîné & Fils, Bourgogne Chardonnay"])
        ]
    },
    {
        id: id("French", "Quiche Lorraine"),
        cuisine: "French",
        name: "Quiche Lorraine",
        blurb: "Egg custard tart with bacon and cream.",
        flags: ["pork", "creamy"],
        pairings: [
            P("White", "Alsace Pinot Blanc (clean, gentle fruit)", "Soft texture fits egg custard; freshness balances bacon richness.", "Trimbach, Pinot Blanc", ["Hugel, Pinot Blanc", "Zind-Humbrecht, Pinot Blanc"])
        ]
    },
    {
        id: id("French", "Duck confit"),
        cuisine: "French",
        name: "Duck confit",
        blurb: "Crisp duck leg, rich and savory.",
        flags: [],
        pairings: [
            P("Red", "Gigondas / Vacqueyras (Grenache blend)", "Herbal spice and warmth meet duck fat; tannin grips crispy skin.", "Domaine Santa Duc, Gigondas", ["Château de Saint Cosme, Gigondas", "Domaine La Bouïssière, Gigondas"])
        ]
    },
    {
        id: id("French", "Salade niçoise"),
        cuisine: "French",
        name: "Salade niçoise",
        blurb: "Tuna, olives, eggs, and vegetables.",
        flags: ["seafood"],
        pairings: [
            P("Rosé", "Provence Rosé (dry, crisp)", "Handles tuna/olive/salty elements without overpowering vegetables.", "Domaines Ott, Château de Selle Rosé", ["Miraval Rosé", "Whispering Angel (Caves d'Esclans)"])
        ]
    },
    {
        id: id("French", "Ratatouille"),
        cuisine: "French",
        name: "Ratatouille",
        blurb: "Stewed Mediterranean vegetables with herbs.",
        flags: ["vegetarian"],
        pairings: [
            P("Red", "Côtes du Rhône (medium-bodied, herb-friendly)", "Herb-and-tomato-friendly reds with moderate tannin suit stewed veg.", "E. Guigal, Côtes du Rhône Rouge", ["M. Chapoutier, Côtes du Rhône Rouge", "Famille Perrin, Côtes du Rhône Rouge"])
        ]
    },
    {
        id: id("French", "Crème brûlée"),
        cuisine: "French",
        name: "Crème brûlée",
        blurb: "Silky custard with caramelized top.",
        flags: ["creamy"],
        pairings: [
            P("Dessert", "Sauternes (botrytised sweet white)", "Honeyed sweetness matches custard; acidity prevents cloying finish.", "Château Suduiraut, Sauternes", ["Château Rieussec, Sauternes", "Château Coutet, Barsac"])
        ]
    },

    // Portuguese (10)
    {
        id: id("Portuguese", "Bacalhau à Brás"),
        cuisine: "Portuguese",
        name: "Bacalhau à Brás",
        blurb: "Salt cod with potato and egg.",
        flags: ["seafood"],
        pairings: [
            P("White", "Vinho Verde Alvarinho/Loureiro (high-acid)", "Zippy acidity cuts fried potato and egg; citrus lifts salted cod.", "Soalheiro, Alvarinho", ["Anselmo Mendes, Alvarinho", "Quinta de Azevedo, Vinho Verde"])
        ]
    },
    {
        id: id("Portuguese", "Bacalhau com natas"),
        cuisine: "Portuguese",
        name: "Bacalhau com natas",
        blurb: "Cod gratin with cream.",
        flags: ["seafood", "creamy"],
        pairings: [
            P("White", "Dão Branco (mineral, medium-bodied)", "Enough weight for cream; freshness keeps the dish from feeling heavy.", "Quinta dos Roques, Dão Branco", ["Casa da Passarella, Dão Branco", "Quinta de Saes, Dão Branco"])
        ]
    },
    {
        id: id("Portuguese", "Sardinhas assadas"),
        cuisine: "Portuguese",
        name: "Sardinhas assadas",
        blurb: "Grilled sardines with smoke and salt.",
        flags: ["seafood"],
        pairings: [
            P("White", "Vinho Verde (light, saline-friendly)", "Crisp whites love grilled oily fish and smoke.", "Aphros, Vinho Verde Loureiro", ["Quinta da Lixa, Vinho Verde", "Aveleda, Vinho Verde"])
        ]
    },
    {
        id: id("Portuguese", "Francesinha"),
        cuisine: "Portuguese",
        name: "Francesinha",
        blurb: "Layered meat sandwich with spicy sauce.",
        flags: ["pork", "beef", "spicy"],
        pairings: [
            P("Red", "Douro Red (ripe, structured blend)", "Rich sauce + meats need bold fruit and tannin; Douro spice fits.", "Quinta do Crasto, Douro Tinto", ["Niepoort, Redoma Tinto", "Casa Ferreirinha, Vinha Grande"])
        ]
    },
    {
        id: id("Portuguese", "Caldo verde"),
        cuisine: "Portuguese",
        name: "Caldo verde",
        blurb: "Kale soup with chouriço.",
        flags: ["pork"],
        pairings: [
            P("White", "Vinho Verde (bright, low-alcohol feel)", "Light whites match greens and broth; clean up smoky chouriço.", "Quinta do Ameal, Loureiro", ["Soalheiro, Primeiras Vinhas", "Anselmo Mendes, Muros Antigos"])
        ]
    },
    {
        id: id("Portuguese", "Arroz de marisco"),
        cuisine: "Portuguese",
        name: "Arroz de marisco",
        blurb: "Seafood rice with briny depth.",
        flags: ["seafood"],
        pairings: [
            P("White", "Encruzado (textured Portuguese white)", "Texture handles shellfish rice; citrus/mineral notes complement seafood.", "Quinta da Pellada, Encruzado", ["Textura Wines, Encruzado", "Luis Pato (white blend)"])
        ]
    },
    {
        id: id("Portuguese", "Polvo à lagareiro"),
        cuisine: "Portuguese",
        name: "Polvo à lagareiro",
        blurb: "Octopus with olive oil and garlic.",
        flags: ["seafood"],
        pairings: [
            P("White", "Alvarinho (richer Vinho Verde style)", "Octopus + olive oil need body plus acidity; Alvarinho delivers both.", "Anselmo Mendes, Alvarinho Contacto", ["Soalheiro, Granit", "Quinta de Santiago, Alvarinho"])
        ]
    },
    {
        id: id("Portuguese", "Porco preto grelhado"),
        cuisine: "Portuguese",
        name: "Porco preto grelhado",
        blurb: "Iberian black pork on the grill.",
        flags: ["pork"],
        pairings: [
            P("Red", "Alentejo Red (plush, rounded tannins)", "Juicy pork loves ripe dark fruit and gentle spice.", "Herdade do Esporão, Reserva Tinto", ["Cartuxa, EA Tinto", "Herdade dos Grous, Tinto"])
        ]
    },
    {
        id: id("Portuguese", "Cataplana de marisco"),
        cuisine: "Portuguese",
        name: "Cataplana de marisco",
        blurb: "Shellfish stew with aromatic broth.",
        flags: ["seafood"],
        pairings: [
            P("White", "Arinto (high-acid, citrus)", "Acidity handles tomato/garlic broth and varied shellfish.", "AdegaMãe, Arinto", ["Quinta do Ameal, Arinto", "Quinta da Alorna, Arinto"])
        ]
    },
    {
        id: id("Portuguese", "Pastel de nata"),
        cuisine: "Portuguese",
        name: "Pastel de nata",
        blurb: "Custard tart with caramelized top.",
        flags: ["creamy"],
        pairings: [
            P("Fortified", "10-Year Tawny Port (nutty, caramel)", "Caramel and spice echo custard and scorched top; sweetness aligned.", "Graham's 10 Year Old Tawny", ["Taylor Fladgate 10 Year Tawny", "Dow's 10 Year Tawny"])
        ]
    },

    // Italian (10)
    {
        id: id("Italian", "Margherita pizza"),
        cuisine: "Italian",
        name: "Margherita pizza",
        blurb: "Tomato, mozzarella, basil.",
        flags: ["vegetarian"],
        pairings: [
            P("Red", "Chianti Classico (Sangiovese, high-acid)", "Acidity matches tomato; savory cherry notes love mozzarella and basil.", "Castello di Ama, Chianti Classico", ["Fèlsina, Chianti Classico", "Fontodi, Chianti Classico"])
        ]
    },
    {
        id: id("Italian", "Spaghetti carbonara"),
        cuisine: "Italian",
        name: "Spaghetti carbonara",
        blurb: "Guanciale, egg, pecorino, pepper.",
        flags: ["pork", "creamy"],
        pairings: [
            P("White", "Verdicchio (textured, fresh)", "Cuts guanciale fat; structure holds egg/cheese richness.", "Umani Ronchi, Verdicchio Classico", ["Bucci, Verdicchio Classico", "Garofoli, Verdicchio"])
        ]
    },
    {
        id: id("Italian", "Lasagna al ragù"),
        cuisine: "Italian",
        name: "Lasagna al ragù",
        blurb: "Ragù + béchamel + cheese layers.",
        flags: ["beef", "creamy"],
        pairings: [
            P("Red", "Barbera (high-acid, low-ish tannin)", "Acidity refreshes; avoids tannin clash with tomato and cheese.", "Vietti, Barbera d'Asti", ["G.D. Vajra, Barbera d'Alba", "Michele Chiarlo, Barbera d'Asti"])
        ]
    },
    {
        id: id("Italian", "Risotto ai funghi"),
        cuisine: "Italian",
        name: "Risotto ai funghi",
        blurb: "Mushroom risotto, creamy and earthy.",
        flags: ["vegetarian", "creamy"],
        pairings: [
            P("Red", "Nebbiolo (lighter body, complex)", "Earthy aromatics mirror mushrooms; acidity keeps risotto lively.", "Produttori del Barbaresco, Langhe Nebbiolo", ["G.D. Vajra, Langhe Nebbiolo", "Pio Cesare, Langhe Nebbiolo"])
        ]
    },
    {
        id: id("Italian", "Osso buco alla Milanese"),
        cuisine: "Italian",
        name: "Osso buco alla Milanese",
        blurb: "Braised veal shanks, rich and gelatinous.",
        flags: ["beef"],
        pairings: [
            P("Red", "Nebbiolo (structured, aromatic)", "Tannin grips gelatin-rich meat; aromatics handle gremolata.", "Vietti, Barolo Castiglione", ["Pio Cesare, Barolo", "Produttori del Barbaresco, Barbaresco"])
        ]
    },
    {
        id: id("Italian", "Saltimbocca alla Romana"),
        cuisine: "Italian",
        name: "Saltimbocca alla Romana",
        blurb: "Veal with prosciutto and sage.",
        flags: [],
        pairings: [
            P("White", "Soave Classico (Garganega, crisp)", "Freshness balances prosciutto salt; delicate body suits veal.", "Pieropan, Soave Classico", ["Inama, Soave Classico", "Suavia, Soave Classico"])
        ]
    },
    {
        id: id("Italian", "Spaghetti alle vongole"),
        cuisine: "Italian",
        name: "Spaghetti alle vongole",
        blurb: "Clams, parsley, garlic, olive oil.",
        flags: ["seafood"],
        pairings: [
            P("White", "Vermentino (citrus-saline)", "Saline citrus complements clams; bright acid fits pasta.", "Argiolas, Costamolino Vermentino", ["Banfi, La Pettegola Vermentino", "Cantina Santadi, Vermentino"])
        ]
    },
    {
        id: id("Italian", "Bistecca alla Fiorentina"),
        cuisine: "Italian",
        name: "Bistecca alla Fiorentina",
        blurb: "Charred steak, Tuscan style.",
        flags: ["beef"],
        pairings: [
            P("Red", "Bolgheri / Super Tuscan blend (structured)", "Bold structure for char; savory herbs align with grilled flavors.", "Antinori, Tignanello", ["Tenuta San Guido, Guidalberto", "Le Macchiole, Bolgheri Rosso"])
        ]
    },
    {
        id: id("Italian", "Parmigiana di melanzane"),
        cuisine: "Italian",
        name: "Parmigiana di melanzane",
        blurb: "Eggplant, tomato, cheese layers.",
        flags: ["vegetarian", "creamy"],
        pairings: [
            P("Red", "Montepulciano d'Abruzzo (juicy, tomato-friendly)", "Handles tomato + fried eggplant + cheese without harsh tannin.", "Masciarelli, Montepulciano d'Abruzzo", ["Emidio Pepe, Montepulciano d'Abruzzo", "Rosso Conero (Montepulciano)"])
        ]
    },
    {
        id: id("Italian", "Tiramisu"),
        cuisine: "Italian",
        name: "Tiramisu",
        blurb: "Coffee and cocoa, mascarpone cream.",
        flags: ["creamy"],
        pairings: [
            P("Dessert", "Vin Santo (nutty, sweet)", "Nutty caramel notes love coffee/cocoa; sweetness matches mascarpone.", "Avignonesi, Vin Santo di Montepulciano", ["Badia a Coltibuono, Vin Santo", "Castello di Querceto, Vin Santo"])
        ]
    },

    // Spanish (10)
    {
        id: id("Spanish", "Paella"),
        cuisine: "Spanish",
        name: "Paella",
        blurb: "Saffron rice with seafood.",
        flags: ["seafood"],
        pairings: [
            P("White", "Albariño (saline/citrus)", "Citrus-saline lift for saffron rice and seafood; refreshes between bites.", "Pazo de Señorans, Albariño", ["Martín Códax, Albariño", "La Val, Albariño"])
        ]
    },
    {
        id: id("Spanish", "Tortilla española"),
        cuisine: "Spanish",
        name: "Tortilla española",
        blurb: "Egg and potato omelette.",
        flags: ["vegetarian", "creamy"],
        pairings: [
            P("Sparkling", "Cava Brut (dry, crisp)", "Bubbles cut egg and potato richness; dry finish keeps it snackable.", "Raventós i Blanc, Blanc de Blancs", ["Juvé & Camps, Brut Nature", "Gramona, Brut"])
        ]
    },
    {
        id: id("Spanish", "Patatas bravas"),
        cuisine: "Spanish",
        name: "Patatas bravas",
        blurb: "Fried potatoes with spicy sauce.",
        flags: ["vegetarian", "spicy"],
        pairings: [
            P("Sparkling", "Cava Brut (palate-cleansing)", "Spice + fried potato = bubbles and acidity as a reset button.", "Segura Viudas, Brut Reserva", ["Freixenet, Brut", "Codorníu, Brut"])
        ]
    },
    {
        id: id("Spanish", "Jamón ibérico"),
        cuisine: "Spanish",
        name: "Jamón ibérico",
        blurb: "Cured ham, salty and nutty.",
        flags: ["pork"],
        pairings: [
            P("Fortified", "Fino/Manzanilla Sherry (bone dry, saline)", "Saline, yeasty notes mirror cured ham; dryness prevents heaviness.", "La Gitana, Manzanilla", ["Tío Pepe, Fino", "Lustau, Fino"])
        ]
    },
    {
        id: id("Spanish", "Pulpo a la gallega"),
        cuisine: "Spanish",
        name: "Pulpo a la gallega",
        blurb: "Octopus with paprika and olive oil.",
        flags: ["seafood"],
        pairings: [
            P("White", "Godello (textured white)", "Body for octopus + olive oil; minerality for paprika seasoning.", "Rafael Palacios, Louro Godello", ["Godeval, Godello", "Valdesil, Godello"])
        ]
    },
    {
        id: id("Spanish", "Gambas al ajillo"),
        cuisine: "Spanish",
        name: "Gambas al ajillo",
        blurb: "Garlic shrimp with a little heat.",
        flags: ["seafood", "spicy"],
        pairings: [
            P("White", "Verdejo (zesty, aromatic)", "Zest and herbs stand up to garlic and chili; keeps shrimp bright.", "José Pariente, Verdejo", ["Marqués de Riscal, Verdejo", "Bodegas Naia, Verdejo"])
        ]
    },
    {
        id: id("Spanish", "Croquetas"),
        cuisine: "Spanish",
        name: "Croquetas",
        blurb: "Creamy béchamel croquettes.",
        flags: ["creamy"],
        pairings: [
            P("Sparkling", "Cava Brut Nature (very dry)", "Creamy + fried calls for acidity and bubbles to keep it light.", "Juvé & Camps, Brut Nature", ["Segura Viudas, Brut Reserva", "Raventós i Blanc, De Nit"])
        ]
    },
    {
        id: id("Spanish", "Cochinillo asado"),
        cuisine: "Spanish",
        name: "Cochinillo asado",
        blurb: "Roast suckling pig with crispy skin.",
        flags: ["pork"],
        pairings: [
            P("Red", "Ribera del Duero (Tempranillo, structured)", "Firm structure meets crispy skin; dark fruit complements roast.", "Emilio Moro, Ribera del Duero", ["Pago de los Capellanes, Crianza", "Pesquera, Crianza"])
        ]
    },
    {
        id: id("Spanish", "Morcilla"),
        cuisine: "Spanish",
        name: "Morcilla",
        blurb: "Blood sausage, savory and spiced.",
        flags: ["pork"],
        pairings: [
            P("Red", "Rioja Reserva (savory oak, balanced)", "Savory spice loves cedar/leather notes and balanced tannin.", "La Rioja Alta, Viña Ardanza", ["Marqués de Murrieta, Reserva", "CVNE, Imperial Reserva"])
        ]
    },
    {
        id: id("Spanish", "Basque cheesecake"),
        cuisine: "Spanish",
        name: "Basque cheesecake",
        blurb: "Caramelized top, creamy center.",
        flags: ["creamy"],
        pairings: [
            P("Dessert", "Pedro Ximénez Sherry (rich, raisiny)", "Intense sweetness meets caramelized top; rich dessert harmony.", "Lustau, Pedro Ximénez", ["González Byass, Nectar PX", "Toro Albalá, PX"])
        ]
    },

    // English (10)
    {
        id: id("English", "Fish and chips"),
        cuisine: "English",
        name: "Fish and chips",
        blurb: "Crispy batter and flaky fish.",
        flags: ["seafood"],
        pairings: [
            P("Sparkling", "Brut sparkling (high-acid)", "Bubbles + acidity slice through batter and oil; brightens the fish.", "Nyetimber Classic Cuvée", ["Ridgeview Bloomsbury", "Crémant de Loire Brut (quality producer)"])
        ]
    },
    {
        id: id("English", "Roast beef + Yorkshire pudding"),
        cuisine: "English",
        name: "Roast beef + Yorkshire pudding",
        blurb: "Roast beef with gravy and pudding.",
        flags: ["beef"],
        pairings: [
            P("Red", "Bordeaux-style blend (Cab/Merlot)", "Structure and savory notes match roast and gravy; tannin grips beef.", "Château Gloria, Saint-Julien", ["Château Batailley, Pauillac", "Château Branaire-Ducru, Saint-Julien"])
        ]
    },
    {
        id: id("English", "Roast chicken"),
        cuisine: "English",
        name: "Roast chicken",
        blurb: "Crisp skin, classic Sunday roast.",
        flags: [],
        pairings: [
            P("White", "Chablis / crisp Chardonnay", "Enough body for roast flavors; acidity keeps it fresh.", "Jean-Marc Brocard, Chablis", ["Louis Latour, Mâcon-Villages", "Balanced Chardonnay (cool-climate)"])
        ]
    },
    {
        id: id("English", "Shepherd's pie"),
        cuisine: "English",
        name: "Shepherd's pie",
        blurb: "Hearty meat and mash comfort.",
        flags: ["beef"],
        pairings: [
            P("Red", "Côtes du Rhône (comfort-food red)", "Fruit + herbs + moderate tannin match hearty filling and mash.", "Famille Perrin, Côtes du Rhône Rouge", ["E. Guigal, Côtes du Rhône Rouge", "M. Chapoutier, Côtes du Rhône Rouge"])
        ]
    },
    {
        id: id("English", "Bangers and mash"),
        cuisine: "English",
        name: "Bangers and mash",
        blurb: "Sausage, mash, onion gravy.",
        flags: ["pork"],
        pairings: [
            P("Red", "Beaujolais (Gamay, low tannin)", "Juicy fruit suits sausage; low tannin avoids bitterness with onions.", "Jean Foillard, Morgon", ["Marcel Lapierre, Morgon", "Jadot, Beaujolais-Villages"])
        ]
    },
    {
        id: id("English", "Steak and ale pie"),
        cuisine: "English",
        name: "Steak and ale pie",
        blurb: "Beef in ale gravy under pastry.",
        flags: ["beef"],
        pairings: [
            P("Red", "Northern Rhône Syrah style (peppery)", "Pepper and savory depth suit beef + ale gravy; structure for pastry.", "E. Guigal, Crozes-Hermitage", ["Jaboulet, Crozes-Hermitage", "Quality Syrah (peppery, not jammy)"])
        ]
    },
    {
        id: id("English", "Ploughman's lunch"),
        cuisine: "English",
        name: "Ploughman's lunch",
        blurb: "Cheddar, pickles, bread.",
        flags: ["vegetarian"],
        pairings: [
            P("White", "Dry Chenin Blanc (high-acid)", "Acidity handles cheddar fat; fruit plays with pickle/chutney.", "Domaine Huet, Vouvray Sec", ["Saumur Blanc (Chenin)", "Dry Chenin (clean, zesty)"])
        ]
    },
    {
        id: id("English", "Smoked salmon"),
        cuisine: "English",
        name: "Smoked salmon",
        blurb: "Silky, salty, smoky fish.",
        flags: ["seafood"],
        pairings: [
            P("Sparkling", "Brut sparkling (crisp, bready)", "Smoke + salt love bubbles; acidity balances oily texture.", "Pierre Peters, Cuvée de Réserve", ["Nyetimber Classic Cuvée", "Crémant d'Alsace Brut (quality producer)"])
        ]
    },
    {
        id: id("English", "Full English breakfast"),
        cuisine: "English",
        name: "Full English breakfast",
        blurb: "Salty, fatty, comforting mix.",
        flags: ["pork"],
        pairings: [
            P("Sparkling", "Brut sparkling (acid + bubbles)", "Handles mixed salty/fatty elements; refreshes between bites.", "Ridgeview Bloomsbury", ["Nyetimber Classic Cuvée", "Cava Brut Nature (quality producer)"])
        ]
    },
    {
        id: id("English", "Sticky toffee pudding"),
        cuisine: "English",
        name: "Sticky toffee pudding",
        blurb: "Warm caramel dessert.",
        flags: ["creamy"],
        pairings: [
            P("Dessert", "Tawny Port (caramel, nutty)", "Caramel-on-caramel pairing; warmth and nuts echo the sauce.", "Taylor Fladgate 10 Year Tawny", ["Graham's 10 Year Tawny", "Dow's 10 Year Tawny"])
        ]
    }
];

// Optional: curated education cards (Tip of day etc.)
export const EDUCATION: GlossaryItem[] = [
    {
        slug: "acid-cuts-fat",
        title: "Acid Cuts Fat",
        tag: "Pairing 101",
        body: "High-acid wines act like a squeeze of lemon on rich food: they refresh your palate and keep flavors from feeling heavy."
    },
    {
        slug: "salt-loves-bubbles",
        title: "Salt Loves Bubbles",
        tag: "Pairing 101",
        body: "Sparkling wines pair brilliantly with salty and fried foods—CO₂ plus acidity cleans your palate after each bite."
    },
    {
        slug: "tannin-needs-protein",
        title: "Tannin Needs Protein",
        tag: "Reds",
        body: "Tannins bind to proteins and fats. That's why structured reds shine with steak, roast meats, and rich braises."
    }
];
