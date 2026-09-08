let currentMode = "main"; 
let activePotContents = [];
let unlockedRecipes = JSON.parse(localStorage.getItem('discovered_recipes_v2')) || [];

function toggleKitchenMode(mode) {
    currentMode = mode;
    const mainBtn = document.getElementById('btn-mode-main');
    const destBtn = document.getElementById('btn-mode-dessert');
    
    const applianceFrame = document.getElementById('cooking-appliance-frame');
    const applianceTitle = document.getElementById('appliance-title');
    const actionBtn = document.getElementById('cook-action-btn');
    
    if (mode === "main") {
        mainBtn.className = "mode-toggle-btn active-main";
        destBtn.className = "mode-toggle-btn";
        
        // Return back to stockpot settings styles
        applianceFrame.className = "stockpot";
        applianceTitle.innerText = "♨️ Cooking Range";
        actionBtn.innerText = "SIMMER MIXTURE 🍳";
    } else {
        mainBtn.className = "mode-toggle-btn";
        destBtn.className = "mode-toggle-btn active-dessert";
        
        // Morph the appliance class layout shell directly into a Baking Oven
        applianceFrame.className = "stockpot baking-oven-mode";
        applianceTitle.innerText = "⌾ Baking Oven";
        actionBtn.innerText = "BAKE CONFECTION 🍰";
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
    if (activePotContents.length >= 3) {
        alert("The container workspace is full! Clear elements or compile your recipe.");
        return;
    }

    const isDuplicate = activePotContents.some(item => item.key === key);
    if (isDuplicate) {
        alert(`❌ You already added ${label}! A valid dish requires 3 completely distinct ingredients.`);
        return;
    }

    activePotContents.push({ key: key, label: label, mode: currentMode });
    triggerApplianceParticles();
    renderTrackerPillsList();
}

// MANAGE APPLIANCE TRAIL ANIMATIONS (Boiling surface bubbles vs glass door steam)
// UPDATED: Spreads particles across the pot and oven space dynamically using random ranges
// UPDATED: Calculates strict, mathematically even horizontal positions for every item
function triggerApplianceParticles() {
    const layer = document.getElementById('soup-bubble-layer');
    layer.innerHTML = ''; 
    
    activePotContents.forEach((item, index) => {
        const particle = document.createElement('div');
        
        // MATHEMATICALLY EVEN SPACING: Splits the total container width perfectly based on total item count
        // 3 items will sit beautifully at 25%, 50%, and 75% across the pot frame grid
        const exactEvenX = ((index + 1) / (activePotContents.length + 1)) * 100;
        
        if (currentMode === "main") {
            particle.className = 'pixel-bubble';
            particle.style.left = `${exactEvenX}%`;
            particle.style.background = "#e67e22";
            // Staggers the animation starts slightly so they don't rise up like a rigid wall
            particle.style.animationDelay = `${index * 0.25}s`;
        } else {
            particle.className = 'pixel-steam-trail';
            particle.style.left = `${exactEvenX}%`;
            particle.style.animationDelay = `${index * 0.25}s`;
        }
        layer.appendChild(particle);
    });
}

// UPDATED: Dynamically checks both main and dessert registries to pull item graphics cleanly
function renderTrackerPillsList() {
    const trackerList = document.getElementById('tracker-pills-list');
    trackerList.innerHTML = '';

    activePotContents.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.className = 'tracker-item-row';
        
        // Comprehensive check looking through all category structures inside both files
        const findSVG = () => {
            const pools = [
                window.mainCoursePantry?.proteins, window.mainCoursePantry?.vegetables, window.mainCoursePantry?.sauces,
                window.dessertPantry?.proteins, window.dessertPantry?.vegetables, window.dessertPantry?.sauces
            ];
            for (let pool of pools) {
                if (pool && pool[item.key]) return pool[item.key].svg;
            }
            return ''; // Empty canvas vector fallback block if unassigned
        };

        itemRow.innerHTML = `
            <div class="pill-core-content">
                ${findSVG()}
                <span>${item.label}</span>
            </div>
            <button class="pill-single-remove-btn" onclick="removeSingleIngredient(${index})">🗑️</button>
        `;
        trackerList.appendChild(itemRow);
    });
}

// FUNCTION: Splicing specific numerical node tracking position indexes instantly
function removeSingleIngredient(index) {
    activePotContents.splice(index, 1);
    triggerApplianceParticles();
    renderTrackerPillsList();
}

function clearStockpot() {
    activePotContents = [];
    document.getElementById('soup-bubble-layer').innerHTML = '';
    document.getElementById('tracker-pills-list').innerHTML = '';
}

function compilePotRecipe() {
    if (activePotContents.length !== 3) {
        alert(`Your workspace contains ${activePotContents.length} items. You must combine EXACTLY 3 ingredients to bake or simmer!`);
        return;
    }

    let keysArr = activePotContents.map(i => i.key).sort();
    let recipeMatchKey = keysArr.join(',');
    let trackingStorageKey = `recipe:${recipeMatchKey}`;

    let dishTitle = "";
    let dishRecipe = "";
    
    let matchedData = null;
    let foundInMode = currentMode;

    if (window.extraRecipes && window.extraRecipes[recipeMatchKey]) {
        matchedData = window.extraRecipes[recipeMatchKey];
        foundInMode = "main";
    } else if (window.dessertRecipes && window.dessertRecipes[recipeMatchKey]) {
        matchedData = window.dessertRecipes[recipeMatchKey];
        foundInMode = "dessert";
    }

    if (matchedData) {
        dishTitle = matchedData.title;
        dishRecipe = matchedData.realWay;
    } else {
        const database = currentMode === "main" ? window.extraRecipes : window.dessertRecipes;
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
            dishTitle = currentMode === "main" ? "Chef's Hand-Tossed Stir Fry" : "Baker's Choice Pastry Board";
            dishRecipe = "INGREDIENTS:\n• 3 Selected Pantry Items\n\nSTEPS:\n1. Mince components down uniformly.\n2. Apply controlled heat using the kitchen station layout configuration.\n3. Pull when edges turn crisp.";
        }
    }

    if (unlockedRecipes.some(r => r.id === trackingStorageKey)) {
        alert(`🍳 You created "${dishTitle}" again! You already have this in your Journal.`);
        clearStockpot();
        return;
    }

    alert(`✨ NEW RECIPE DISCOVERED: ${dishTitle}!`);

    unlockedRecipes.push({ 
        id: trackingStorageKey, 
        title: dishTitle, 
        text: dishRecipe,
        recipeType: foundInMode 
    });
    
    localStorage.setItem('discovered_recipes_v2', JSON.stringify(unlockedRecipes));
    renderDiscoveredJournal();
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
        card.style.borderColor = recipe.recipeType === "main" ? "#e07a5f" : "#9a7aa0";
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
