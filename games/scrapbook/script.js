let currentMode = "main"; // Defaults to tracking dinner recipes
let activePotContents = [];
let unlockedRecipes = JSON.parse(localStorage.getItem('discovered_recipes_v2')) || [];

function toggleKitchenMode(mode) {
    currentMode = mode;
    
    // Manage UI highlighted rows
    const mainBtn = document.getElementById('btn-mode-main');
    const destBtn = document.getElementById('btn-mode-dessert');
    
    if (mode === "main") {
        mainBtn.className = "mode-toggle-btn active-main";
        destBtn.className = "mode-toggle-btn";
    } else {
        mainBtn.className = "mode-toggle-btn";
        destBtn.className = "mode-toggle-btn active-dessert";
    }
    
    clearStockpot();
    loadPantryShelves();
}

function loadPantryShelves() {
    const activePantry = currentMode === "main" ? window.mainCoursePantry : window.dessertPantry;
    
    // Wipe shelf targets completely
    document.getElementById('shelf-proteins').innerHTML = '';
    document.getElementById('shelf-vegetables').innerHTML = '';
    document.getElementById('shelf-sauces').innerHTML = '';

    Object.keys(activePantry).forEach(cat => {
        const platformNode = document.getElementById(`shelf-${cat}`);
        Object.keys(activePantry[cat]).forEach(itemKey => {
            const data = activePantry[cat][itemKey];
            const cell = document.createElement('div');
            cell.className = 'ing-node';
            cell.innerHTML = `${data.svg}<div>${data.name}</div>`;
            cell.onclick = () => addIngredientToPot(itemKey, data.name, data.svg);
            platformNode.appendChild(cell);
        });
    });
    renderDiscoveredJournal();
}

function addIngredientToPot(key, label, rawSVG) {
    // UPDATED: Limit the stockpot to exactly 3 items max instead of 4
    if (activePotContents.length >= 3) {
        alert("The stockpot is full! Simmer your 3 ingredients or discard items.");
        return;
    }
    activePotContents.push({ key: key, label: label, mode: currentMode });
    
    // 1. Generate large bubble particle at top surface
    const layer = document.getElementById('soup-bubble-layer');
    const bubble = document.createElement('div');
    bubble.className = 'pixel-bubble';
    bubble.style.background = currentMode === "main" ? "#e67e22" : "#ff7675";
    bubble.style.left = `${Math.floor(Math.random() * 65) + 5}%`;
    layer.appendChild(bubble);

    // 2. Add item card into Side Tracker Box
    const trackerList = document.getElementById('tracker-pills-list');
    const itemRow = document.createElement('div');
    itemRow.className = 'tracker-item-row';
    itemRow.innerHTML = `${rawSVG}<span>${label}</span>`;
    trackerList.appendChild(itemRow);
}

function clearStockpot() {
    activePotContents = [];
    document.getElementById('soup-bubble-layer').innerHTML = '';
    document.getElementById('tracker-pills-list').innerHTML = '';
}

// UPDATED: Completely enforces exactly 3 ingredients and builds dynamic custom text strings
// UPDATED: Strictly requires 3 ingredients and actively pulls from your script-data-2 database
function compilePotRecipe() {
    // 1. HARD LIMIT: Stop execution immediately if it's not EXACTLY 3 ingredients
    if (activePotContents.length !== 3) {
        alert(`The stockpot contains ${activePotContents.length} items. You must combine EXACTLY 3 ingredients to cook a meal!`);
        return;
    }

    // Isolate chosen keys and alphabetical strings
    let keysArr = activePotContents.map(i => i.key).sort();
    let recipeMatchKey = keysArr.join(',');
    let trackingStorageKey = `${currentMode}:${recipeMatchKey}`;

    let dishTitle = "";
    let dishRecipe = "";
    
    // Target the correct dictionary from your database file (script-data-2.js)
    const database = currentMode === "main" ? extraRecipes : window.dessertRecipes;

    // 2. CHECK FOR EXACT DATABASE MATCH
    if (database && database[recipeMatchKey]) {
        dishTitle = database[recipeMatchKey].title;
        dishRecipe = database[recipeMatchKey].realWay;
    } 
    // 3. FALLBACK: Direct database adaptation (No lazy copy-and-paste sentences)
    else {
        // Find alternative dishes in your database that share at least 1 or 2 ingredients
        let closestMatchKey = null;
        let highestSharedCount = 0;

        Object.keys(database).forEach(dbKey => {
            let dbIngredients = dbKey.split(',');
            let sharedCount = keysArr.filter(ing => dbIngredients.includes(ing)).length;
            
            if (sharedCount > highestSharedCount) {
                highestSharedCount = sharedCount;
                closestMatchKey = dbKey;
            }
        });

        if (closestMatchKey && highestSharedCount > 0) {
            // Pull a real real-world method from your database file to base it on
            let baseRecipe = database[closestMatchKey];
            dishTitle = `Improvised ${baseRecipe.title}`;
            dishRecipe = `Inspired by your recipe for "${baseRecipe.title}". ${baseRecipe.realWay} (Adapted by swapping out missing elements with your selected pantry items).`;
        } else {
            // Absolute last resort if the user managed to pick something completely unrelated
            dishTitle = "Chef's Freestyle Platter";
            dishRecipe = "A unique culinary experiment using elements outside of standard culinary text boundaries. Flash-cook your selected ingredients together over medium heat and season to taste.";
        }
    }

    alert(`✨ UNLOCKED: ${dishTitle}!`);

    if (!unlockedRecipes.some(r => r.id === trackingStorageKey)) {
        unlockedRecipes.push({ id: trackingStorageKey, title: dishTitle, text: dishRecipe });
        localStorage.setItem('discovered_recipes_v2', JSON.stringify(unlockedRecipes));
        renderDiscoveredJournal();
    }
    clearStockpot();
}


function renderDiscoveredJournal() {
    const box = document.getElementById('saved-recipe-grid');
    box.innerHTML = '';
    
    if (unlockedRecipes.length === 0) {
        box.innerHTML = `<div style="font-size:0.8rem; color:#95a5a6; font-style:italic;">Your Journal is empty. Mix pantry elements to discover creations!</div>`;
        return;
    }

    unlockedRecipes.forEach(recipe => {
        const card = document.createElement('button');
        card.className = 'recipe-unlock-card';
        card.innerText = recipe.title;
        card.style.borderColor = recipe.id.startsWith("main") ? "#e67e22" : "#9b59b6";
        card.onclick = () => openRealWorldModal(recipe.title, recipe.text);
        box.appendChild(card);
    });
}

function openRealWorldModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('recipe-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('recipe-modal').classList.remove('active');
}

function purgeMilestoneMemory() {
    if (confirm("⚠️ Wipe all progress? This will delete both your Main Course and Dessert discoveries!")) {
        localStorage.removeItem('discovered_recipes_v2');
        unlockedRecipes = [];
        renderDiscoveredJournal();
        clearStockpot();
    }
}

// Initial Boot Sequence Setup
window.addEventListener('DOMContentLoaded', () => toggleKitchenMode('main'));
