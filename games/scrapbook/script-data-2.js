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

window.dessertRecipes = {
    // Chocolate Blueprints
    "chocolate,flour,milk": { title: "Fudge Chocolate Brownies", realWay: "Melt your rich cocoa blocks with sweet butter. Whisk in pastry flour, sugar, and milk until glossy. Bake at 350°F until the center is rich, thick, and fudgy." },
    "chocolate,dough,vanilla": { title: "Chocolate Lava Tart", realWay: "Press sweet pastry dough firmly into a circular tart pan. Fill the center with a decadent mixture of cocoa blocks, vanilla extract, and cream, then bake until gooey." },
    "caramel,chocolate,marshmallow": { title: "Gourmet Campfire S'mores", realWay: "Toast mallow puffs over an open flame until melted. Sandwich between graham biscuits alongside a block of dark chocolate, and lace with thick burnt caramel syrup." },
    "chocolate,milk,mint": { title: "Peppermint Cocoa Mousse", realWay: "Melt dark cocoa blocks into hot whole cream. Whisk vigorously over an ice bath with mint syrup until airy and light, then chill in glass cups before serving." },

    // Strawberry Blueprints
    "biscuit,creamCheese,strawberry": { title: "Strawberry New York Cheesecake", realWay: "Crush biscuit crumbs with butter to pack a tight crust layer. Whip cream cheese with vanilla until velvety, pour over crust, bake, and crown with sliced glazed strawberries." },
    "dough,strawberry,vanilla": { title: "Cottage Strawberry Galette", realWay: "Roll out a flat sheet of pastry dough. Heap fresh glazed strawberry slices and vanilla sugar directly into the center, fold the edges over roughly, and bake until golden." },
    "creamCheese,icing,strawberry": { title: "Strawberry Fruit Dip Fruit Board", realWay: "Beat cream cheese and sweet glaze icing together until light and fluffy. Serve in a pastel ceramic bowl surrounded by fresh strawberries for dipping." },

    // Apple & Fruit Pastry Blueprints
    "apple,dough,caramel": { title: "Salted Caramel Apple Pie", realWay: "Peel and slice fresh orchard apples, tossing thoroughly with sugar and cinnamon. Nest into a sweet dough pie crust shell, drench with hot caramel, layer a lattice top, and bake." },
    "banana,biscuit,custard": { title: "Southern Banana Cream Pudding", realWay: "Layer sweet custard cream and sliced ripe bananas alternately inside a deep dish. Pack vanilla biscuits around the margins and let rest in the fridge for 4 hours." },
    "apple,caramel,vanilla": { title: "Blistered Toffee Apples", realWay: "Insert skewers into whole orchard apples. Boil sugar and caramel syrup down until it hits hard-crack phase, dip the apples, dust with vanilla bean powder, and cool." },

    // Specialty & Matcha Confections
    "dough,matcha,milk": { title: "Ceremonial Matcha Crepe Cake", realWay: "Whisk flour, whole cream milk, and green matcha powder into a thin batter. Fry paper-thin crepes sequentially in a skillet, then stack 20 layers deep using sweet cream." },
    "custard,flour,honey": { title: "Honey Egg Custard Tart", realWay: "Whisk egg custard and raw honey together until completely uniform. Pour into blind-baked pastry flour shells and bake at 320°F until the center sets perfectly." },
    "coconut,gelatin,milk": { title: "Tropical Coconut Panna Cotta", realWay: "Bloom gelatin pods in cold water. Scald whole cream milk with shredded coconut flakes, stir in the gelatin until dissolved, strain into molds, and chill until firm." },

    // Fun Candy & Topping Combos
    "biscuit,chocolate,sprinkles": { title: "Confetti Chocolate Bark", realWay: "Melt a massive block of cocoa down. Spread thin across a baking sheet lined with crushed biscuit bits, cover completely with rainbow sprinkles, and freeze until solid." },
    "marshmallow,sprinkles,vanilla": { title: "Rainbow Mallow Pops", realWay: "Dip your marshmallow puffs directly into warm vanilla glaze icing. Roll in rainbow sprinkles until coated, stick onto skewers, and let dry." },
    "coconut,honey,marshmallow": { title: "Toasted Coconut Snowballs", realWay: "Warm raw honey in a saucepan. Roll your mallow puffs through the hot honey, then immediately dredge through freshly toasted shredded coconut until fuzzy and covered." },
    "banana,chocolate,milk": { title: "Old School Banana Split", realWay: "Slice a ripe banana in half lengthwise. Scoop chocolate custard cream down the middle, drizzle with hot melted cocoa syrup, and blanket with sprinkles." },
    "creamCheese,flour,icing": { title: "Glazed Cinnamon Roll Bun", realWay: "Roll pastry flour dough tightly with brown sugar and cinnamon. Slice into wheels and bake, then frost with a layer of cream cheese icing glaze." },
    "custard,honey,vanilla": { title: "Classic Creme Caramel Flan", realWay: "Coat the base of ramekins with dark caramelized honey. Pour vanilla egg custard cream on top, bake in a water bath, and invert onto a plate to release the syrup." },
    "gelatin,honey,mint": { title: "Refreshing Emerald Mint Jelly", realWay: "Dissolve gelatin pods into boiling hot mint syrup, honey, and fresh water. Pour into mini star molds and refrigerate until completely bouncy." }
};

// Procedurally generate the remaining combination pairs to guarantee 100+ total dessert possibilities
const dProteins = ["chocolate", "strawberry", "creamCheese", "gelatin", "custard"];
const dVegetables = ["flour", "dough", "biscuit", "apple", "banana", "matcha", "sprinkles", "coconut", "marshmallow"];
const dSauces = ["honey", "caramel", "milk", "vanilla", "icing", "mint"];

Object.assign(window.recipeBook, extraRecipes);
