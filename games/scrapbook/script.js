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

// UPDATED: Rewritten combination processor targeting exactly 3 elements and real-world lookups
function compilePotRecipe() {
    // ENFORCED: Must be precisely 3 ingredients
    if (activePotContents.length !== 3) {
        alert(`Your stockpot contains ${activePotContents.length} items. You must combine EXACTLY 3 ingredients to simmer a real meal!`);
        return;
    }

    // Isolate component lists
    let keysArr = activePotContents.map(i => i.key).sort();
    let labelsArr = activePotContents.map(i => i.label);
    
    // Build lookup keys matching extraRecipes and dessertRecipes from your data file
    let recipeMatchKey = keysArr.join(',');
    let trackingStorageKey = `${currentMode}:${recipeMatchKey}`;

    let dishTitle = "";
    let dishRecipe = "";
    let matchedData = null;

    // Check against your database files loaded into your window/global scopes
    if (currentMode === "main") {
        if (typeof extraRecipes !== 'undefined' && extraRecipes[recipeMatchKey]) {
            matchedData = extraRecipes[recipeMatchKey];
        }
    } else {
        if (window.dessertRecipes && window.dessertRecipes[recipeMatchKey]) {
            matchedData = window.dessertRecipes[recipeMatchKey];
        }
    }

    if (matchedData) {
        // If an explicit database item exists, extract your custom real-world recipe methods
        dishTitle = matchedData.title;
        dishRecipe = matchedData.realWay;
    } else {
        // Dynamic procedural generation using all 3 items so it doesn't look copy-and-pasted
        if (currentMode === "main") {
            dishTitle = `Rustic ${labelsArr[0]} & ${labelsArr[1]} Hash`;
            dishRecipe = `Carefully prep your raw ${labelsArr[0]} and clean your ${labelsArr[1]}. Heat a splash of oil in your frying pan over a medium flame, tossing the chopped elements together. Finish by drizzling a layer of fresh ${labelsArr[2]} over the plate before serving hot.`;
        } else {
            dishTitle = `Deconstructed ${labelsArr[0]} & ${labelsArr[1]} Parfait`;
            dishRecipe = `Gently chill your sweet ${labelsArr[0]} base inside a mixing bowl. Carefully crush or fold your pieces of ${labelsArr[1]} evenly into glass ramekins, layering the elements systematically. Crown the dessert with a generous accent of ${labelsArr[2]} before presenting.`;
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
