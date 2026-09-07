// ============================================================================
// LIVE SYSTEM ENGINE & PROGRESS PROTECTION
// ============================================================================
let activePotContents = [];
let unlockedRecipes = JSON.parse(localStorage.getItem('discovered_recipes')) || [];

function initKitchenSystem() {
    // Safely reference globally exposed window objects
    const dataSrc = window.pantryData;
    const booksSrc = window.recipeBook;

    if (!dataSrc) {
        console.error("Critical Error: window.pantryData failed to load.");
        return;
    }

    // Clear empty containers before rendering new shelf modules
    document.getElementById('shelf-proteins').innerHTML = '';
    document.getElementById('shelf-vegetables').innerHTML = '';
    document.getElementById('shelf-sauces').innerHTML = '';

    // Build and populate Pantry shelves out of the external script-data files
    Object.keys(dataSrc).forEach(cat => {
        const platformNode = document.getElementById(`shelf-${cat}`);
        if (platformNode) {
            Object.keys(dataSrc[cat]).forEach(itemKey => {
                const data = dataSrc[cat][itemKey];
                const cell = document.createElement('div');
                cell.className = 'ing-node';
                cell.innerHTML = `${data.svg}<div>${data.name}</div>`;
                cell.onclick = () => addIngredientToPot(itemKey);
                platformNode.appendChild(cell);
            });
        }
    });
    renderDiscoveredMilestones();
}

// Ingredients disappear into the pot, spawn top bubbles, and register in your layout tracker box
function addIngredientToPot(key) {
    if (activePotContents.length >= 4) {
        alert("The stockpot is full! Cook or reset current mixture.");
        return;
    }
    activePotContents.push(key);
    
    // 1. Generate the giant pixel bubbles at the rim of the pot
    const layer = document.getElementById('soup-bubble-layer');
    const bubble = document.createElement('div');
    bubble.className = 'pixel-bubble';
    let randomSpread = Math.floor(Math.random() * 65) + 5;
    bubble.style.left = `${randomSpread}%`;
    layer.appendChild(bubble);

    // 2. Look up the vector data matching the selection key across category maps
    let itemMatch = null;
    Object.keys(pantryData).forEach(cat => {
        if (pantryData[cat][key]) itemMatch = pantryData[cat][key];
    });

    if (itemMatch) {
        // 3. Render a detailed graphics card inside your tracking sidebar desk panel
        const trackerList = document.getElementById('tracker-pills-list');
        const itemRow = document.createElement('div');
        itemRow.className = 'tracker-item-row';
        itemRow.innerHTML = `${itemMatch.svg}<span>${itemMatch.name}</span>`;
        trackerList.appendChild(itemRow);
    }
}

// Clears bubbles and empties the sidebar text log container cleanly
function clearStockpot() {
    activePotContents = [];
    document.getElementById('soup-bubble-layer').innerHTML = '';
    document.getElementById('tracker-pills-list').innerHTML = ''; // Wipes item row cards completely
}


function compilePotRecipe() {
    if (activePotContents.length === 0) {
        alert("The stockpot is empty! Click pantry ingredients to add them.");
        return;
    }
    
    // Sort items alphabetically to match the lookup keys precisely
    let searchKey = activePotContents.sort().join(',');
    let match = window.recipeBook[searchKey];

    // FIX: If it matches a verified handwritten recipe, unlock it!
    if (match) {
        alert(`✨ SUCCESS: Unlocked ${match.title}!`);
        if (!unlockedRecipes.includes(searchKey)) {
            unlockedRecipes.push(searchKey);
            localStorage.setItem('discovered_recipes', JSON.stringify(unlockedRecipes));
            renderDiscoveredMilestones();
        }
    } else {
        // If it doesn't match, give a funny cooking fail notice instead of an ugly copy-paste string
        alert("💥 The mix burned! No distinct meal recipe identified. Look closely at the available components in your tabs!");
    }
    clearStockpot();
}


function renderDiscoveredMilestones() {
    const box = document.getElementById('saved-recipe-grid');
    if (!box) return;
    box.innerHTML = '';
    
    if (unlockedRecipes.length === 0) {
        box.innerHTML = `<div style="font-size:0.8rem; color:#95a5a6; font-style:italic;">Your Journal is empty. Simmer pantry items to discover meals!</div>`;
        return;
    }

    unlockedRecipes.forEach(key => {
        let lookup = window.recipeBook[key];
        
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

// Fire system initialization loop securely when DOM Content finishes parsing
window.addEventListener('DOMContentLoaded', initKitchenSystem);
