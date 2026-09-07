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
    if (activePotContents.length >= 4) {
        alert("The stockpot is full! Simmer or discard items.");
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

function compilePotRecipe() {
    if (activePotContents.length === 0) {
        alert("The stockpot is empty! Drop items in first.");
        return;
    }

    // Isolate component lists
    let keysArr = activePotContents.map(i => i.key).sort();
    let labelsArr = activePotContents.map(i => i.label);
    let searchKey = `${currentMode}:${keysArr.join(',')}`;

    // Procedural Combo Generator Engine to safely scale across 200+ combinations
    let dishTitle = "";
    let dishRecipe = "";

    if (currentMode === "main") {
        dishTitle = `Savory ${labelsArr[0]} & ${labelsArr[1] || "Herb"} Plate`;
        dishRecipe = `Pan-sear your ${labelsArr[0]} in a scorching hot skillet. Toss in your chosen starch base (${labelsArr[1] || "greens"}) and glaze with savory accents until golden brown. Serve hot.`;
    } else {
        dishTitle = `Gourmet Glazed ${labelsArr[0]} ${labelsArr[1] || "Confection"}`;
        dishRecipe = `Gently whisk your sugar base and ${labelsArr[0]} together in a saucepan over medium heat. Fold into your pastry base (${labelsArr[1] || "cream crust"}), chill, and cover with sweet icing toppings.`;
    }

    alert(`✨ UNLOCKED: ${dishTitle}!`);

    if (!unlockedRecipes.some(r => r.id === searchKey)) {
        unlockedRecipes.push({ id: searchKey, title: dishTitle, text: dishRecipe });
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
