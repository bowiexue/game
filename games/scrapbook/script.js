let currentMode = "main"; 
let activePotContents = [];
let unlockedRecipes = JSON.parse(localStorage.getItem('discovered_recipes_v2')) || [];

function toggleKitchenMode(mode) {
    currentMode = mode;
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
    // HARD LIMIT: Prevents more than 3 ingredients from ever entering the array
    if (activePotContents.length >= 3) {
        alert("The stockpot is full! Simmer your 3 ingredients or discard items.");
        return;
    }
    activePotContents.push({ key: key, label: label, mode: currentMode });
    
    const layer = document.getElementById('soup-bubble-layer');
    const bubble = document.createElement('div');
    bubble.className = 'pixel-bubble';
    bubble.style.background = currentMode === "main" ? "#e67e22" : "#ff7675";
    bubble.style.left = `${Math.floor(Math.random() * 65) + 5}%`;
    layer.appendChild(bubble);

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

function compilePotRecipe() {
    // ENFORCED HARD BOUNDARY: Stops processing if it's not EXACTLY 3 elements
    if (activePotContents.length !== 3) {
        alert(`Your stockpot contains ${activePotContents.length} items. You must combine EXACTLY 3 ingredients to build an actual recipe!`);
        return;
    }

    let keysArr = activePotContents.map(i => i.key).sort();
    let recipeMatchKey = keysArr.join(',');
    let trackingStorageKey = `${currentMode}:${recipeMatchKey}`;

    let dishTitle = "";
    let dishRecipe = "";
    
    const database = currentMode === "main" ? window.extraRecipes : window.dessertRecipes;

    // A. EXACT MATCH FROM DATABASE (Zero generic templates used here)
    if (database && database[recipeMatchKey]) {
        dishTitle = database[recipeMatchKey].title;
        dishRecipe = database[recipeMatchKey].realWay;
    } 
    // B. DYNAMIC CLONING FALLBACK: Borrows and alters the closest existing recipe layout 
    else {
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
            let baseRecipe = database[closestMatchKey];
            let activeItems = activePotContents.map(i => i.label).join(', ');
            
            dishTitle = `Improvised ${baseRecipe.title}`;
            dishRecipe = `INGREDIENTS:\n• Custom Mix: ${activeItems}\n\nCULINARY METHOD (Adapted directly from your "${baseRecipe.title}" blueprint):\n${baseRecipe.realWay}`;
        } else {
            dishTitle = "Chef's Hand-Tossed Stir Fry";
            dishRecipe = "INGREDIENTS:\n• 3 Selected Pantry Items\n\nSTEPS:\n1. Mince all solid components evenly.\n2. Shallow fry in butter or lard over a rolling induction flame.\n3. Deglaze with cooking liquid choices to cleanly bind the flavor notes together.";
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

window.addEventListener('DOMContentLoaded', () => toggleKitchenMode('main'));
