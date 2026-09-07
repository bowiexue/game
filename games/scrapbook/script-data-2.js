// Global components filter maps
window.components = { 
    proteins: ["beef", "chicken", "pork", "fish", "tofu"], 
    grains: ["rice", "noodles", "potato"], 
    liquids: ["soySauce", "curry", "broth", "butter", "sugar", "vinegar"] 
};

const extraRecipes = {
    "onion,tomato,vinegar": { title: "Oaxacan Fresh Salsa", realWay: "Finely chop raw vine tomatoes and red onions. Toss in a glass bowl with a tiny splash of vinegar, sea salt, and black pepper." },
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

// Safely merge extra combinations into the master object
Object.assign(window.recipeBook, extraRecipes);

// Global components filter maps
window.components = { 
    proteins: ["beef", "chicken", "pork", "fish", "tofu"], 
    grains: ["rice", "noodles", "potato"], 
    liquids: ["soySauce", "curry", "broth", "butter", "sugar", "vinegar"] 
};

const extraRecipes = {
    "chili,onion,tomato": { title: "Oaxacan Fresh Salsa", realWay: "Finely chop raw vine tomatoes, red onions, and hot chilis. Transfer to a bowl, dress with sea salt, cracked black pepper, and a small splash of vinegar to marinate." },
    "butter,potato,tomato": { title: "Blistered Gnocchi", realWay: "Pan-fry soft potato dumplings in sweet butter until crisp. Toss in whole cherry tomatoes and garlic, cooking until the tomato skins pop open into a rich glaze." },
    "chicken,chili,sugar": { title: "Hunan Sweet Chili Chicken", realWay: "Crisp chicken cubes in hot oil. Bring a sticky glaze of sugar, rice vinegar, chili paste, and garlic to a bubble in a separate skillet, then toss the chicken until coated." },
    "butter,fish,potato": { title: "Garlic Butter Fish Sheet", realWay: "Place fresh fish fillets and thin potato coins on a pan. Slather with an emulsion of melted sweet butter, garlic paste, and lemon zest, then bake at 400°F." },
    "broth,mushroom,onion": { title: "French Onion Bone Soup", realWay: "Caramelize sliced red onions in a pot for 45 minutes until deep brown and sweet. Pour in rich beef bone broth, float a piece of bread topped with cheese blocks, and broil until bubbly." },
    "beef,cheese,mushroom": { title: "Philly Mushroom Steak", realWay: "Shave flank steak paper-thin and flash sear with sliced mushrooms and onions. Form into a long row, blanket with cheddar blocks, melt, and scoop into a hoagie roll." },
    "cheese,pork,tomato": { title: "Pork Chop Parmigiana", realWay: "Bread pork chops and fry until golden. Lay in a baking dish, smother with savory vine tomato marinara sauce, top with cheddar cheese, and bake until melting." },
    "chicken,onion,soySauce": { title: "Classic Chicken Adobo", realWay: "Simmer chicken thighs directly in a balanced pool of soy sauce, vinegar, crushed garlic cloves, whole peppercorns, and sliced red onions until fall-apart tender." },
    "beef,chili,tomato": { title: "Border Chili Con Carne", realWay: "Brown cubed beef chuck with onions and garlic. Stir in crushed tomatoes, toasted chili paste, cumin, and beef broth, then simmer low and slow for 3 hours." },
    "fish,noodles,vinegar": { title: "Sweet Sour Fish Noodles", realWay: "Crisp fish nuggets. Flash fry egg noodles with onions, then hit the pan with a sweet and sour reduction of sugar, vinegar, and tomato paste." },
    "onion,pork,tofu": { title: "Homestyle Pork Tofu Wok", realWay: "Sear firm tofu blocks and pork slices in oil. Drop in sliced red onions and garlic, then glaze with oyster sauce and white pepper over high heat." },
    "broth,chicken,garlic": { title: "Garlic Collagen Broth", realWay: "Roast chicken bones and whole heads of garlic. Submerge in water with onions and peppercorns, then low-simmer for 10 hours to extract rich collagen." },
    "mushroom,rice,sugar": { title: "Sweet Glazed Shiitake Don", realWay: "Simmer fresh shiitake mushroom caps in a reduction of dark soy sauce, sugar, and ginger until sweet and sticky. Serve over short-grain rice." },
    "curry,pork,potato": { title: "Pork Potato Curry", realWay: "Brown pork belly chunks and potato quarters. Stir in rich curry roux broth and onions, then simmer until the potatoes naturally thicken the sauce." },
    "cheese,garlic,potato": { title: "Potato Gratin Dauphinois", realWay: "Slice russet potatoes paper-thin. Layer in a baking dish with heavy cream infused with crushed garlic, tucking cheddar blocks between the rows. Bake at 375°F." },
    "chili,fish,garlic": { title: "Hunan Steamed Garlic Fish", realWay: "Lay white fish fillets on a plate. Cover with a thick paste of minced red chilis, tons of raw garlic, and soy sauce, then steam over boiling water for 10 minutes." },
    "butter,sugar,tomato": { title: "Sweet Italian Butter Sauce", realWay: "Simmer halved vine tomatoes, a halved onion, a stick of sweet butter, and a pinch of sugar in a saucepan for 45 minutes. Mash into a smooth sauce." },
    "beef,noodles,onion": { title: "Shaking Beef Noodles", realWay: "Flash sear cubed beef tenderloin with onions and garlic in a blazing hot wok. Serve directly over warm egg noodles with a lime pepper dip." },
    "cheese,chicken,potato": { title: "Cheesy Chicken Potato Tray", realWay: "Toss diced chicken, potatoes, and garlic in olive oil. Bake until tender, then cover with a thick layer of cheddar cheese and return to the oven until bubbling." },
    "mushroom,noodles,soySauce": { title: "Forest Mushroom Chow Mein", realWay: "Stir-fry mixed forest mushrooms and egg noodles in sesame oil with sliced onions, garlic, and a heavy splash of savory soy sauce." },
    "pork,tomato,vinegar": { title: "Sweet Sour Crispy Pork", realWay: "Deep fry pork belly cubes until crisp. Toss in a bubbling sauce made from caramelized sugar, vinegar, tomato paste, and chopped onions." },
    "beef,broth,garlic": { title: "Clear Garlic Shank Soup", realWay: "Simmer beef shanks and roasted garlic heads in a large stockpot for 6 hours. Skim fat continuously to yield a clean, mineral-rich clear soup." },
    "fish,rice,sugar": { title: "Sweet Kabayaki Fish Bowl", realWay: "Pan-fry fish fillets while brushing continuously with a reduced lacquer of soy sauce and sugar. Serve hot over a fresh bowl of white rice." },
    "cheese,tofu,tomato": { title: "Tomato Tofu Gratin", realWay: "Layer sliced firm tofu and vine tomatoes in a dish. Season with garlic powder, smother with cheddar blocks, and bake until a golden crust forms." },
    "chili,garlic,pork": { title: "Twice-Cooked Pork Belly", realWay: "Boil pork belly, slice thin, and flash fry in a wok with garlic leeks, sliced chilis, garlic cloves, and dark sweet soy sauce." },
    "broth,rice,tofu": { title: "Comforting Tofu Congee", realWay: "Boil white rice inside rich bone broth for an hour until it breaks down into a thick, comforting porridge. Stir in cubed silken tofu and white pepper." },
    "beef,chicken,pork": { title: "Carnivore Three-Meat Roast", realWay: "Sear beef cubes, chicken thighs, and pork belly in lard. Transfer to a roasting pan with onions and garlic, and bake at 350°F until deeply browned." },
    "noodles,potato,rice": { title: "Triple-Starch Carbs Bowl", realWay: "Boil noodles and potato cubes. Toss into a skillet with cold left-over rice, frying in butter and soy sauce until the bottom forms a crispy crust." },
    "broth,curry,soySauce": { title: "Triple-Sauce Umami Glaze", realWay: "Whisk savory bone broth, dark soy sauce, and gold curry blocks together in a pan. Bring to a simmer to create a highly savory gravy." },
    "butter,sugar,vinegar": { title: "Tangy Butter Caramel Syrup", realWay: "Slowly melt butter, sugar, and vinegar in a small saucepan. Reduce on low heat until a thick, tangy caramel syrup forms for drizzling over cooked sides." }
};

// Safely merge extra combinations into the master object without automated looping text engines
Object.assign(window.recipeBook, extraRecipes);

});
