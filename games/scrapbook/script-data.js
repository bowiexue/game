// ============================================================================
// PART 1: THE 20 PIXEL-ART PANTRY INGREDIENTS
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
        butter: { name: "Sweet Butter", svg: `<svg viewBox="0 0 16 16"><rect x="3" y="5" width="10" height="6" fill="#fffde7" stroke="#2c3e50"/><line x1="3" y1="8" x2="13" y2="8" stroke="#f1c40f"/></svg>` },
        sugar: { name: "Pure Sugar", svg: `<svg viewBox="0 0 16 16"><polygon points="8,2 14,12 2,12" fill="#ffffff" stroke="#2c3e50"/></svg>` },
        vinegar: { name: "Acid Vinegar", svg: `<svg viewBox="0 0 16 16"><path d="M5,4 H11 V14 H5 Z" fill="#78e08f" stroke="#2c3e50"/></svg>` }
    }
};

// ============================================================================
// PART 2: THE UNIQUE HAND-CRAFTED RECIPE COMBINATIONS
// ============================================================================
const recipeBook = {
    "beef,rice,soySauce": { title: "Gyudon Beef Bowl", realWay: "Thinly simmer beef strips and onions in sweet soy sauce, mirin, and dashi. Serve hot over a fresh bowl of white rice." },
    "chicken,curry,rice": { title: "Katsu Curry Rice", realWay: "Fry panko-breaded chicken until crispy. Simmer potatoes and onions in savory curry roux blocks, then pour over jasmine rice." },
    "fish,rice,vinegar": { title: "Traditional Sushi", realWay: "Mix seasoned rice vinegar into warm rice. Slice chilled raw fish, then press it firmly onto small oblong rice mounds." },
    "broth,noodles,pork": { title: "Tonkotsu Ramen", realWay: "Simmer pork bones to build a rich broth. Place egg noodles below sliced braised pork belly, a soft egg, and fresh green onions." },
    "beef,onion,potato": { title: "Hearty Beef Stew", realWay: "Sear beef cubes in your stockpot. Toss in diced russet potatoes and red onions, fill with thick broth, and low-simmer for 2 hours." },
    "cheese,noodles,tomato": { title: "Classic Spaghetti", realWay: "Boil egg noodles until perfectly al dente. Simmer crushed vine tomatoes and garlic into a thick red sauce, then blanket with cheese." },
    "chili,soySauce,tofu": { title: "Mapo Tofu Blast", realWay: "Toss cubed tofu into a smoking hot wok with fiery red chili paste, minced garlic, soy sauce, and ground peppercorns." },
    "butter,garlic,potato": { title: "Garlic Mash Pot", realWay: "Boil russet potatoes until fork-tender. Mash thoroughly with melted sweet butter, fresh crushed garlic, and a splash of heavy milk." },
    "butter,chicken,mushroom": { title: "Creamy Shroom Chicken", realWay: "Pan-sear chicken breasts in real butter. Toss sliced mushrooms right into the rich pan drippings, reducing down with fresh heavy cream." },
    "fish,onion,tomato": { title: "Poached Fisher Stew", realWay: "Saute diced tomatoes and red onions. Nestle fresh fish fillets directly into the hot sauce to poach gently until flaky and tender." },
    "pork,rice,sugar": { title: "Sweet Glazed Pork Rice", realWay: "Melt sugar and soy sauce together until caramelized. Coat cubed pork belly in the glaze, then spoon over hot steamed white rice." },
    "butter,garlic,noodles": { title: "Garlic Butter Noodles", realWay: "Toss boiled noodles straight into a saucepan filled with sizzling sweet butter, minced garlic cloves, and freshly cut parsley." },
    "broth,mushroom,onion": { title: "Wild Mushroom Soup", realWay: "Saute choice mushrooms and diced onions together. Pour in warm bone soup broth and simmer on medium heat to blend flavors." },
    "broth,mushroom,tofu": { title: "Cozy Veggie Hot Pot", realWay: "Simmer thick mushroom caps and firm tofu cubes inside a boiling clay pot filled with clear vegetable broth, garlic, and greens." },
    "noodles,pork,soySauce": { title: "Pork Chow Mein", realWay: "Flash fry egg noodles in a blindingly hot wok with thinly sliced pork shoulder ribbons, julienned onions, and savory soy sauce." },
    "beef,cheese,potato": { title: "Loaded Cheese Fries", realWay: "Bake potato wedges until crispy. Layer with seasoned ground beef and a hill of cheddar cheese, then broil until golden and melting." },
    "chicken,chili,garlic": { title: "Firecracker Chicken", realWay: "Crisp chicken pieces in a hot skillet, then drench them in a sticky glaze made from hot red chilis, crushed garlic, honey, and vinegar." },
    "butter,potato,tomato": { title: "Rustic Tomato Hash", realWay: "Dice potatoes and pan-fry them in butter. Toss in sweet vine tomatoes, onion slivers, and fresh herbs until blistered and tender." },
    "onion,tomato,vinegar": { title: "Fresh Picnic Salsa", realWay: "Finely chop raw vine tomatoes and red onions. Toss in a glass bowl with a tiny splash of vinegar, sea salt, and black pepper." },
    "rice,soySauce,tofu": { title: "Tofu Rice Skillet", realWay: "Press firm tofu to drain water, cube, and pan-sear until crisp. Toss directly into left-over rice with sweet onions and a splash of soy sauce." }
};

// Procedurally generate the remaining combination pairs to guarantee 50+ total recipe possibilities
const components = { proteins: ["beef", "chicken", "pork", "fish", "tofu"], grains: ["rice", "noodles", "potato"], liquids: ["soySauce", "curry", "broth", "butter", "sugar", "vinegar"] };
components.proteins.forEach(b => {
    components.grains.forEach(g => {
        components.liquids.forEach(l => {
            let key = [b, g, l].sort().join(',');
            if (!recipeBook[key]) {
                recipeBook[key] = {
                    title: `Pantry ${b.toUpperCase()} Stir-Fry`,
                    realWay: `Slice your main protein (${b}) and starch card (${g}). Stir fry in a pan over medium-high heat, dressing with a heavy splash of ${l} until glistening.`
                };
            }
        });
    });
});
