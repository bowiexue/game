// ============================================================================
// LIVE SYSTEM ENGINE & BROWSING MEMORY
// ============================================================================
let activePotContents = [];
let unlockedRecipes = JSON.parse(localStorage.getItem('discovered_recipes')) || [];

function initKitchenSystem() {
    // Build and populate Pantry shelves out of Section A's data structures
    Object.keys(pantryData).forEach(cat => {
        const platformNode = document.getElementById(`shelf-${cat}`);
        Object.keys(pantryData[cat]).forEach(itemKey => {
            const data = pantryData[cat][itemKey];
            const cell = document.createElement('div');
            cell.className = 'ing-node';
            cell.innerHTML = `${data.svg}<div>${data.name}</div>`;
            cell.onclick = () => addIngredientToPot(itemKey, data.name);
            platformNode.appendChild(cell);
        });
    });
    renderDiscoveredMilestones();
}

function addIngredientToPot(key, label) {
    if (activePotContents.length >= 4) {
        alert("The stockpot is full! Cook or reset current mixture.");
        return;
    }
    activePotContents.push(key);
    
    // Add visual label pill to pot
    const tag = document.createElement('span');
    tag.style.background = '#34495e';
    tag.style.color = 'white';
    tag.style.padding = '4px 8px';
    tag.style.fontSize = '0.7rem';
    tag.style.borderRadius = '2px';
    tag.style.border = '2px solid #2c3e50';
    tag.innerText = label;
    
    document.getElementById('pot-contents').appendChild(tag);
}

function clearStockpot() {
    activePotContents = [];
    document.getElementById('pot-contents').innerHTML = '';
}

function compilePotRecipe() {
    if (activePotContents.length === 0) {
        alert("The stockpot is empty! Click pantry ingredients to add them.");
        return;
    }
    
    // Sort items alphabetically to perfectly match the lookup table keys
    let searchKey = activePotContents.sort().join(',');
    let match = recipeBook[searchKey];
    
    if (!match) {
        // Fallback filter search to find key pairings
        let simpleKey = activePotContents.filter(i => Object.values(components).some(arr => arr.includes(i))).sort().join(',');
        match = recipeBook[simpleKey];
    }

    if (match) {
        alert(`✨ SUCCESS: Unlocked ${match.title}!`);
        if (!unlockedRecipes.includes(searchKey)) {
            unlockedRecipes.push(searchKey);
            localStorage.setItem('discovered_recipes', JSON.stringify(unlockedRecipes));
            renderDiscoveredMilestones();
        }
    } else {
        alert("💥 The mix burned! No distinct meal recipe identified. Try linking a Protein, Carbs, and a Sauce combination!");
    }
    clearStockpot();
}

function renderDiscoveredMilestones() {
    const box = document.getElementById('saved-recipe-grid');
    box.innerHTML = '';
    
    if (unlockedRecipes.length === 0) {
        box.innerHTML = `<div style="font-size:0.8rem; color:#95a5a6; font-style:italic;">Your Journal is empty. Simmer pantry items to discover meals!</div>`;
        return;
    }

    unlockedRecipes.forEach(key => {
        let lookup = recipeBook[key];
        if (!lookup) {
            let simpleKey = key.split(',').filter(i => Object.values(components).some(arr => arr.includes(i))).sort().join(',');
            lookup = recipeBook[simpleKey];
        }
        
        const card = document.createElement('button');
        card.className = 'recipe-unlock-card';
        card.innerText = lookup ? lookup.title : "Custom Formula";
        card.onclick = () => openRealWorldModal(lookup ? lookup.title : "Custom Formula", lookup ? lookup.realWay : "Mix elements evenly.");
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
    if (confirm("⚠️ Clear Milestone Progress?\n\nThis will completely wipe your unlocked Recipe Journal from memory. This cannot be undone!")) {
        localStorage.removeItem('discovered_recipes');
        unlockedRecipes = [];
        renderDiscoveredMilestones();
        clearStockpot();
    }
}

// Execute core sequence
initKitchenSystem();
