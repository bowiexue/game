// ============================================================================
// DATABASE PART 1: THE 20 PIXEL-ART PANTRY INGREDIENTS
// ============================================================================
const pantryData = {
    proteins: {
        beef: { name: "Beef Chop", svg: `<svg viewBox="0 0 16 16"><path d="M2,4 H14 V12 H2 Z" fill="#b33939" stroke="#2c3e50"/><rect x="4" y="6" width="4" height="4" fill="#ffffff" opacity="0.6"/></svg>` },
        chicken: { name: "Poultry", svg: `<svg viewBox="0 0 16 16"><path d="M4,4 Q12,2 12,8 Q12,12 8,12 Z" fill="#f7d794" stroke="#2c3e50"/><rect x="8" y="12" width="2" height="3" fill="#cd6133"/></svg>` },
        pork: { name: "Pork Belly", svg: `<svg viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="8" fill="#ffb3ba" stroke="#2c3e50"/><line x1="2" y1="7" x2="14" y2="7" stroke="#ff7675" stroke-width="2"/></svg>` },
        fish: { name: "Raw Fish", svg: `<svg viewBox="0 0 16 16"><path d="M2,8 Q8,3 14,8 Q8,13 2,8 Z" fill="#74b9ff" stroke="#2c3e50"/><circle cx="11" cy="7" r="1" fill="#fff"/></svg>` },
        tofu: { name: "Firm Tofu", svg: `<svg viewBox="0 0 16 16"><rect x="3" y="3" width="10" height="10" fill="#f5f6fa" stroke="#2c3e50"/><rect x="4" y="4" width="3" height="3" fill="#dcdde1"/></svg>` }
    },
    vegetables: {
        rice: { name: "White Rice", svg: `<svg viewBox="0 0 16 16"><ellipse cx="8" cy="10" rx="6" ry="4" fill="#dcdde1" stroke="#2c3e50"/><circle cx="7" cy="8" r="1" fill="#fff"/><circle cx="9" cy="7" r="1" fill="#fff"/></svg>` },
        noodles: { name: "Egg Noodle", svg: `<svg viewBox="0 0 16 16"><rect x="3" y="4" width="10" height="8" fill="#ffeaa7" stroke="#2c3e50"/><line x1="5" y1="4" x2="5" y2="12" stroke="#f1c40f"/></svg>` },
        potato: { name: "Russet Pot", svg: `<svg viewBox="0 0 16 16"><path d="M3,6 Q8,3 13,6 Q11,13 3,11 Z" fill="#cd6133" stroke="#2c3e50"/></svg>` },
        tomato: { name: "Vine Tomato", svg: `<svg viewBox="0 0 16 16"><circle cx="8" cy="9" r="5" fill="#ff7675" stroke="#2c3e50"/><path d="M7,4 H9 V6 H7 Z" fill="#2ecc71"/></svg>` },
        onion: { name: "Red Onion", svg: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" fill="#d1b9dc" stroke="#2c3e50"/><path d="M8,3 V5" stroke="#845131"/></svg>` },
        garlic: { name: "Clove Garlic", svg: `<svg viewBox="0 0 16 16"><path d="M4,12 Q8,6 8,3 Q8,6 12,12 Z" fill="#f5f6fa" stroke="#2c3e50"/></svg>` },
        mushroom: { name: "Shroom", svg: `<svg viewBox="0 0 16 16"><path d="M3,8 Q8,2 13,8 Z" fill="#cd6133" stroke="#2c3e50"/><rect x="7" y="8" width="2" height="5" fill="#f5f6fa" stroke="#2c3e50"/></svg>` },
        chili: { name: "Hot Chili", svg: `<svg viewBox="0 0 16 16"><path d="M3,4 Q8,14 13,12" fill="none" stroke="#e74c3c" stroke-width="3.5"/><path d="M3,4 L4,6" stroke="#2ecc71" stroke-width="2"/></svg>` },
        cheese: { name: "Cheddar Block", svg: `<svg viewBox="0 0 16 16"><path d="M2,12 L14,4 V12 Z" fill="#f1c40f" stroke="#2c3e50"/><circle cx="10" cy="9" r="1" fill="#d35400"/></svg>` }
    },
    sauces: {
        soySauce: { name: "Soy Sauce", svg: `<svg viewBox="0 0 16 16"><rect x="5" y="6" width="6" height="8" fill="#2c3e50" stroke="#2c3e50"/><rect x="7" y="2" width="2" height="4" fill="#e67e22"/></svg>` },
        curry: { name: "Curry Roux", svg: `<svg viewBox="0 0 16 16"><rect x="3" y="5" width="10" height="8" fill="#d35400" stroke="#2c3e50"/><rect x="4" y="6" width="4" height="3" fill="#e67e22"/></svg>` },
        broth: { name: "Bone Soup", svg: `<svg viewBox="0 0 16 16"><path d="M2,6 H14 V13 H2 Z" fill="#f39c12" opacity="0.5" stroke="#2c3e50"/><rect x="4" y="3" width="8" height="3" fill="#7f8c8d"/></svg>` },
        butter: { name: "Sweet Butter", svg: `<svg viewBox="0 0 16 16"><rect x="3" y="5" width="10" height="6" fill="#fffde7" stroke="#2c3e50"/><line x1="3" y1="8" x2="13" height="8" stroke="#f1c40f"/></svg>` },
        sugar: { name: "Pure Sugar", svg: `<svg viewBox="0 0 16 16"><polygon points="8,2 14,12 2,12" fill="#ffffff" stroke="#2c3e50"/></svg>` },
        vinegar: { name: "Acid Vinegar", svg: `<svg viewBox="0 0 16 16"><path d="M5,4 H11 V14 H5 Z" fill="#78e08f" stroke="#2c3e50"/></svg>` }
    }
};

// ============================================================================
// DATABASE PART 2: THE UNLOCKED RECIPES DICTIONARY (RECIPES 1 - 20)
// ============================================================================
const recipeBook = {
    "beef,rice,soySauce": { title: "Tokyo Gyudon Bowl", realWay: "Thinly slice tender beef ribeye and sweet yellow onions. Simmer together in a hot pan filled with dark soy sauce, sweet mirin, and dashi broth. Ladle over streaming short-grain white rice." },
    "chicken,curry,rice": { title: "Golden Katsu Curry", realWay: "Butterfly your chicken breast, coat with flour, egg wash, and panko crumbs. Deep fry at 350°F until crunchy. Dissolve Japanese curry roux blocks with carrots and potatoes, then plate next to white rice." },
    "fish,rice,vinegar": { title: "Edomae Nigiri Sushi", realWay: "Wash sushi rice thoroughly, cook, and gently fold in seasoned rice vinegar using a wooden spatula. Slice fresh sushi-grade raw fish cleanly, then press over small hand-molded oblong pads of the rice." },
    "pork,rice,soySauce": { title: "Hong Kong Chashu Fan", realWay: "Marinate thick pork belly strips in Chinese five-spice, soy sauce, and honey. Roast at high heat until beautifully charred and glossy. Slice thinly and serve on hot white rice with greens." },
    "rice,soySauce,tofu": { title: "Teriyaki Tofu Bowl", realWay: "Press water completely out of firm tofu blocks, cube, and toss in cornstarch. Pan-sear until crispy on all sides. Glaze with a boiling mixture of soy sauce and sugar, then plate over white rice." },
    "broth,noodles,pork": { title: "Tonkotsu Master Ramen", realWay: "Boil pork marrow bones fiercely for over 12 hours until the soup becomes cloudy and creamy. Drop wheat ramen noodles in a bowl, submerge in the hot broth, and crown with chashu pork belly and a soft egg." },
    "cheese,noodles,tomato": { title: "Spaghetti Marinara", realWay: "Bring a massive pot of salted water to a boil and cook semolina pasta until al dente. Crush sweet vine tomatoes with fresh garlic and olive oil, simmer into a thick sauce, and cover with parmesan." },
    "beef,noodles,soySauce": { title: "Wok Beef Lo Mein", realWay: "Sear flank steak strips in a smoking hot wok. Throw in thick yellow egg noodles, julienned onions, and scallions, then toss aggressively with premium dark soy sauce and sesame oil." },
    "chicken,noodles,onion": { title: "Chicken Noodle Soup", realWay: "Simmer an entire chicken carcass with celery, red onions, and bay leaves to yield a golden clear stock. Pull the meat apart, return to the soup with fresh egg noodles, and cook until tender." },
    "chili,noodles,tofu": { title: "Dan Dan Tofu Noodles", realWay: "Mince firm tofu and crisp it in a pan with chili oil and minced garlic. Pour a spicy peanut sesame paste dressing over hot noodles and stack the tofu crumbs on top." },
    "beef,onion,potato": { title: "Pub Beef Stew", realWay: "Sear heavy chunks of beef chuck until deep brown. Deglaze the pot with stock, drop in chunks of russet potatoes, sweet red onions, and carrots, then simmer on low heat for 3 hours." },
    "butter,garlic,potato": { title: "Garlic Mashed Potatoes", realWay: "Peel your russet potatoes, cut into uniform cubes, and boil until fork-tender. Drain water and mash completely with softened sweet butter, roasted garlic paste, and hot heavy cream." },
    "cheese,pork,potato": { title: "Loaded Cheese Poutine", realWay: "Hand-cut russet potatoes into thin strips and deep fry until crispy. Stack hot cheddar cheese blocks over the fries and ladle blazing hot brown pork gravy over top to melt everything." },
    "chicken,potato,tomato": { title: "Chicken & Potato Roast", realWay: "Toss chicken thighs and potato quarters with crushed vine tomatoes, onions, garlic, and sweet paprika. Arrange on a sheet tray and roast at 420°F until the chicken skin turns golden crackly." },
    "potato,tofu,vinegar": { title: "German Potato Salad", realWay: "Boil waxy potatoes, slice them thick, and toss with a warm dressing made from cider vinegar, oil, minced onions, and crisped smoked tofu cubes." },
    "butter,chicken,mushroom": { title: "Mushroom Chicken Bistro", realWay: "Pan-sear chicken cutlets in melted sweet butter. Remove chicken, throw sliced forest mushrooms and minced garlic into the same hot butter pan drippings, reduce with cream, and re-nest the chicken." },
    "chili,soySauce,tofu": { title: "Sichuan Mapo Tofu", realWay: "Cube silken tofu. Heat chili oil in a pan, bloom minced garlic, ginger, and hot fermented bean paste. Slide the tofu in gently so it doesn't break, glazing in dark soy sauce." },
    "fish,onion,tomato": { title: "Fisherman's Tomato Stew", realWay: "Build a rich aromatic base by sweating red onions, garlic, and fresh vine tomatoes in olive oil. Pour in white fish stock, lay down firm white fish fillets, and poach gently until flaky." },
    "butter,garlic,noodles": { title: "Garlic Butter Noodles", realWay: "Whisk melted sweet butter, oyster sauce, soy sauce, and a mountain of finely minced garlic in a wok. Toss hot egg noodles into the emulsion until emulsified and glossy." },
    "broth,mushroom,tofu": { title: "Zen Forest Hot Pot", realWay: "Arrange shiitake mushrooms, enoki bundles, and firm tofu slabs beautifully inside a shallow earthenware clay pot. Submerge in a seasoned mushroom broth and simmer at the dining table." }
"onion,tomato,vinegar": { title: "Oaxacan Fresh Salsa", realWay: "Finely dice ripe vine tomatoes, crisp red onions, and hot chilis. Transfer to a bowl, dress with a splash of vinegar or fresh lime juice, sea salt, and let marinate for 20 minutes." },
    "butter,potato,tomato": { title: "Blistered Gnocchi", realWay: "Pan-fry soft potato dumplings in sweet butter until crisp. Toss in whole cherry tomatoes and garlic, cooking until the tomato skins pop open and create a light sauce." },
    "chicken,chili,sugar": { title: "Hunan Sweet Chili Chicken", realWay: "Crisp chicken cubes in hot oil. Bring a sticky glaze of sugar, rice vinegar, chili paste, and garlic to a bubble in a skillet, then toss the chicken until completely coated." },
    "fish,potato,butter": { title: "Garlic Butter Fish Sheets", realWay: "Place fresh fish fillets and thin potato coins on a pan. Slather with an emulsion of melted sweet butter, garlic paste, and lemon zest, then bake at 400°F." },
    "broth,mushroom,onion": { title: "French Onion Bone Soup", realWay: "Caramelize sliced red onions in a pot for 45 minutes until deep brown and sweet. Pour in rich beef bone broth, float a piece of bread topped with cheese blocks, and broil until bubbly." },
    "beef,cheese,mushroom": { title: "Philly Mushroom Steak", realWay: "Shave flank steak paper-thin and flash sear with sliced mushrooms and onions. Form into a long row, blanket with cheddar blocks, melt, and scoop into a hoagie roll." },
    "cheese,pork,tomato": { title: "Pork Chop Parmigiana", realWay: "Bread pork chops and fry until golden. Lay in a baking dish, smother with savory vine tomato marinara sauce, top with cheddar cheese, and bake until melting." },
    "chicken,onion,soySauce": { title: "Classic Chicken Adobo", realWay: "Simmer chicken thighs directly in a balanced pool of soy sauce, vinegar, crushed garlic cloves, whole peppercorns, and sliced red onions until fall-apart tender." },
    "beef,chili,tomato": { title: "Border Chili Con Carne", realWay: "Brown cubed beef chuck with onions and garlic. Stir in crushed tomatoes, toasted chili paste, cumin, and beef broth, then simmer low and slow for 3 hours." },
    "fish,noodles,vinegar": { title: "Sweet Sour Fish Noodles", realWay: "Crisp fish nuggets. Flash fry egg noodles with onions, then hit the pan with a sweet and sour reduction of sugar, vinegar, and tomato paste." },
    "pork,tofu,onion": { title: "Homestyle Pork Tofu Wok", realWay: "Sear firm tofu blocks and pork slices in oil. Drop in sliced red onions and garlic, then glaze with oyster sauce and white pepper over high heat." },
    "broth,chicken,garlic": { title: "Garlic Collagen Broth", realWay: "Roast chicken bones and whole heads of garlic. Submerge in water with onions and peppercorns, then low-simmer for 10 hours to extract rich collagen." },
    "mushroom,rice,sugar": { title: "Sweet Glazed Shiitake Don", realWay: "Simmer fresh shiitake mushroom caps in a reduction of dark soy sauce, sugar, and ginger until sweet and sticky. Serve over short-grain rice." },
    "pork,potato,curry": { title: "Pork Potato Curry", realWay: "Brown pork belly chunks and potato quarters. Stir in rich curry roux broth and onions, then simmer until the potatoes naturally thicken the sauce." },
    "cheese,garlic,potato": { title: "Potato Gratin Dauphinois", realWay: "Slice russet potatoes paper-thin. Layer in a baking dish with heavy cream infused with crushed garlic, tucking cheddar blocks between the rows. Bake at 375°F." },
    "chili,fish,garlic": { title: "Hunan Steamed Garlic Fish", realWay: "Lay white fish fillets on a plate. Cover with a thick paste of minced red chilis, tons of raw garlic, and soy sauce, then steam over boiling water for 10 minutes." },
    "butter,sugar,tomato": { title: "Sweet Italian Butter Sauce", realWay: "Simmer halved vine tomatoes, a halved onion, a stick of sweet butter, and a pinch of sugar in a saucepan for 45 minutes. Mash into a smooth sauce." },
    "beef,noodles,onion": { title: "Shaking Beef Noodles", realWay: "Flash sear cubed beef tenderloin with onions and garlic in a blazing hot wok. Serve directly over warm egg noodles with a lime pepper dip." },
    "chicken,cheese,potato": { title: "Cheesy Chicken Potato Tray", realWay: "Toss diced chicken, potatoes, and garlic in olive oil. Bake until tender, then cover with a thick layer of cheddar cheese and return to the oven until bubbling." },
    "mushroom,noodles,soySauce": { title: "Forest Mushroom Chow Mein", realWay: "Stir-fry mixed forest mushrooms and egg noodles in sesame oil with sliced onions, garlic, and a heavy splash of savory soy sauce." },
    "pork,tomato,vinegar": { title: "Sweet Sour Crispy Pork", realWay: "Deep fry pork belly cubes until crisp. Toss in a bubbling sauce made from caramelized sugar, vinegar, tomato paste, and chopped onions." },
    "beef,broth,garlic": { title: "Clear Garlic Shank Soup", realWay: "Simmer beef shanks and roasted garlic heads in a large stockpot for 6 hours. Skim fat continuously to yield a clean, mineral-rich clear soup." },
    "fish,rice,sugar": { title: "Sweet Kabayaki Fish Bowl", realWay: "Pan-fry fish fillets while brushing continuously with a reduced lacquer of soy sauce and sugar. Serve hot over a fresh bowl of white rice." },
    "cheese,tofu,tomato": { title: "Tomato Tofu Gratin", realWay: "Layer sliced firm tofu and vine tomatoes in a dish. Season with garlic powder, smother with cheddar blocks, and bake until a golden crust forms." },
    "chili,pork,garlic": { title: "Twice-Cooked Pork Belly", realWay: "Boil pork belly, slice thin, and flash fry in a wok with garlic leeks, sliced chilis, garlic cloves, and dark sweet soy sauce." },
    "broth,rice,tofu": { title: "Comforting Tofu Congee", realWay: "Boil white rice inside rich bone broth for an hour until it breaks down into a thick, comforting porridge. Stir in cubed silken tofu and white pepper." },
    "chicken,pork,beef": { title: "Carnivore Three-Meat Roast", realWay: "Sear beef cubes, chicken thighs, and pork belly in lard. Transfer to a roasting pan with onions and garlic, and bake at 350°F until deeply browned." },
    "noodles,potato,rice": { title: "Triple-Starch Carbs Bowl", realWay: "Boil noodles and potato cubes. Toss into a skillet with cold left-over rice, frying in butter and soy sauce until the bottom forms a crispy crust." },
    "soySauce,curry,broth": { title: "Triple-Gravy Master Umami", realWay: "Whisk savory bone broth, dark soy sauce, and gold curry blocks together in a pan. Bring to a simmer to create a highly savory gravy." },
    "sugar,vinegar,butter": { title: "Tangy Butter Glaze Sauce", realWay: "Slowly melt butter, sugar, and vinegar in a small saucepan. Reduce on low heat until a thick, tangy caramel syrup forms for drizzling." }

};

Object.assign(recipeBook, extraRecipes);

// Procedurally load generalized matrix alternatives to ensure safety
const bases = ["beef", "chicken", "pork", "fish", "tofu"];
const starch = ["rice", "noodles", "potato"];
const sauces = ["soySauce", "curry", "broth", "butter", "sugar", "vinegar"];

bases.forEach(b => {
    starch.forEach(s => {
        sauces.forEach(l => {
            let sortKey = [b, s, l].sort().join(',');
            if (!recipeBook[sortKey]) {
                recipeBook[sortKey] = {
                    title: `Pantry ${b.toUpperCase()} Stir-Fry`,
                    realWay: `Slice your main protein (${b}) and starch card (${s}). Stir fry in a pan over medium-high heat, dressing with a heavy splash of ${l} until glistening.`
                };
            }
        });
    });
});
