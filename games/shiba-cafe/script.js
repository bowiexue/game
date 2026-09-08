// ========================================================
// 1. GAME CONSOLE STATE MANAGEMENT
// ========================================================
let activeOrder = { frostings: "", decorations: "", borders: "" };
let activeCupContents = { frostings: null, decorations: null, borders: null };
let currentTabMode = "frostings";

// 100% Unique Pixel Art Layer Database (No simple color swaps or creepy claws!)
const RECIPE_DB = {
    frostings: {
        strawberry: { name: "Strawberry Rose Pink", color: "#ffb7b2", svg: `<svg viewBox="0 0 32 32"><rect x="4" y="16" width="24" height="10" fill="#ffb7b2" rx="4"/><rect x="4" y="24" width="24" height="4" fill="#ff9aa2"/></svg>` },
        matcha: { name: "Matcha Mint Jade", color: "#b5f2d3", svg: `<svg viewBox="0 0 32 32"><rect x="4" y="16" width="24" height="10" fill="#b5f2d3" rx="4"/><rect x="4" y="24" width="24" height="4" fill="#95d5b2"/></svg>` },
        taro: { name: "Taro Lavender Velvet", color: "#d8bbff", svg: `<svg viewBox="0 0 32 32"><rect x="4" y="16" width="24" height="10" fill="#d8bbff" rx="4"/><rect x="4" y="24" width="24" height="4" fill="#b39ddb"/></svg>` },
        vanilla: { name: "Vanilla Custard Silk", color: "#fffedb", svg: `<svg viewBox="0 0 32 32"><rect x="4" y="16" width="24" height="10" fill="#fffedb" rx="4"/><rect x="4" y="24" width="24" height="4" fill="#ffe082"/></svg>` }
    },
    decorations: {
        berry: { name: "Glazed Wild Berry", symbol: "🍓", svg: `<svg viewBox="0 0 32 32"><rect x="13" y="10" width="6" height="6" fill="#e63946" rx="2"/><rect x="15" y="8" width="2" height="2" fill="#2a9d8f"/></svg>` },
        stars: { name: "Sugar Confetti Stars", symbol: "⭐", svg: `<svg viewBox="0 0 32 32"><rect x="8" y="11" width="4" height="4" fill="#ffd166"/><rect x="20" y="10" width="4" height="4" fill="#ffd166"/><rect x="14" y="12" width="4" height="4" fill="#ffd166"/></svg>` },
        sprinkles: { name: "Rainbow Crunch", symbol: "✨", svg: `<svg viewBox="0 0 32 32"><rect x="6" y="13" width="3" height="1.5" fill="#ff4757"/><rect x="12" y="11" width="3" height="1.5" fill="#2ed573"/><rect x="18" y="13" width="3" height="1.5" fill="#1e90ff"/><rect x="23" y="11" width="3" height="1.5" fill="#ffa500"/></svg>` },
        none: { name: "Plain Surface", symbol: "❌", svg: `<svg viewBox="0 0 32 32"></svg>` }
    },
    borders: {
        piped: { name: "Piped Whipped Shells", color: "#ffffff", svg: `<svg viewBox="0 0 32 32"><circle cx="5" cy="16" r="2.5" fill="#fff"/><circle cx="10" cy="15" r="2.5" fill="#fff"/><circle cx="16" cy="15" r="2.5" fill="#fff"/><circle cx="22" cy="15" r="2.5" fill="#fff"/><circle cx="27" cy="16" r="2.5" fill="#fff"/></svg>` },
        fudge: { name: "Chocolate Drizzle Ribbon", color: "#5c4a45", svg: `<svg viewBox="0 0 32 32"><rect x="4" y="15" width="24" height="2" fill="#5c4a45"/><rect x="6" y="17" width="2" height="3" fill="#5c4a45"/><rect x="14" y="17" width="2" height="4" fill="#5c4a45"/><rect x="22" y="17" width="2" height="3" fill="#5c4a45"/></svg>` },
        pearls: { name: "Sugar Pearl Beads", color: "#e0f7fa", svg: `<svg viewBox="0 0 32 32"><circle cx="6" cy="16" r="1.5" fill="#e0f7fa"/><circle cx="11" cy="16" r="1.5" fill="#e0f7fa"/><circle cx="16" cy="16" r="1.5" fill="#e0f7fa"/><circle cx="21" cy="16" r="1.5" fill="#e0f7fa"/><circle cx="26" cy="16" r="1.5" fill="#e0f7fa"/></svg>` },
        none: { name: "Raw Borders", color: "transparent", svg: `<svg viewBox="0 0 32 32"></svg>` }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    window.toggleTabMode = toggleTabMode;
    window.addIngredientToMachine = addIngredientToPot;
    window.compilePotRecipe = startMachineBakeCycle;
    window.clearStockpot = clearMachineChamber;

    generateRandomCustomerOrder();
    loadActiveIngredientShelf();
    clearMachineChamber();
});
function generateRandomCustomerOrder() {
    const frostKeys = Object.keys(RECIPE_DB.frostings);
    const decorKeys = Object.keys(RECIPE_DB.decorations);
    const borderKeys = Object.keys(RECIPE_DB.borders);

    activeOrder.frostings = frostKeys[Math.floor(Math.random() * frostKeys.length)];
    activeOrder.decorations = decorKeys[Math.floor(Math.random() * decorKeys.length)];
    activeOrder.borders = borderKeys[Math.floor(Math.random() * borderKeys.length)];

    const ticket = document.getElementById('order-specs-node');
    if (ticket) {
        ticket.innerHTML = `
            💟 ICING: ${RECIPE_DB.frostings[activeOrder.frostings].name}<br>
            💟 TOPPING: ${RECIPE_DB.decorations[activeOrder.decorations].name}<br>
            💟 TRIM: ${RECIPE_DB.borders[activeOrder.borders].name}
        `;
    }
}

function toggleTabMode(tabKey) {
    currentTabMode = tabKey;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(`'${tabKey}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    loadActiveIngredientShelf();
}

function loadActiveIngredientShelf() {
    const shelfGrid = document.querySelector('.ingredients-grid');
    if (!shelfGrid) return;
    shelfGrid.innerHTML = '';

    const activePool = RECIPE_DB[currentTabMode];
    Object.keys(activePool).forEach(itemKey => {
        const item = activePool[itemKey];
        const btn = document.createElement('button');
        btn.className = 'ing-btn';
        
        if (currentTabMode === 'decorations') {
            btn.innerHTML = `<span>${item.symbol}</span> ${item.name}`;
        } else {
            btn.innerHTML = `<span style="width:12px; height:12px; background:${item.color}; border:2px solid var(--ui-casing); border-radius:50%; display:inline-block; margin-right:6px;"></span> ${item.name}`;
        }

        btn.onclick = () => addIngredientToPot(itemKey);
        shelfGrid.appendChild(btn);
    });
}

function addIngredientToPot(key) {
    activeCupContents[currentTabMode] = key;
    renderPillsMatrixDashboard();
    updateVisualCakeLayers();
}

// INJECTION MATRIX: Plugs graphic vector tags directly over sponge anchors!
function updateVisualCakeLayers() {
    const layerSponge = document.getElementById('layer-sponge');
    const layerCream = document.getElementById('layer-cream');
    const layerTopping = document.getElementById('layer-topping');

    // 1. Draw Base Sponge and chosen Frosting
    if (layerSponge && activeCupContents.frostings) {
        layerSponge.innerHTML = RECIPE_DB.frostings[activeCupContents.frostings].svg;
    } else if (layerSponge) {
        // Base biscuit cake preview template before icing selection
        layerSponge.innerHTML = `<svg viewBox="0 0 32 32"><rect x="4" y="18" width="24" height="8" fill="#d3b8b1" rx="4"/></svg>`;
    }

    // 2. Overlay Piped Trim Borders
    if (layerCream && activeCupContents.borders) {
        layerCream.innerHTML = RECIPE_DB.borders[activeCupContents.borders].svg;
    } else if (layerCream) {
        layerCream.innerHTML = '';
    }

    // 3. Overlay Core Candy Decoration Points
    if (layerTopping && activeCupContents.decorations) {
        layerTopping.innerHTML = RECIPE_DB.decorations[activeCupContents.decorations].svg;
    } else if (layerTopping) {
        layerTopping.innerHTML = '';
    }
}

function renderPillsMatrixDashboard() {
    const trackerList = document.getElementById('tracker-pills-list');
    if (!trackerList) return;
    trackerList.innerHTML = '';
    let empty = true;
    
    Object.keys(activeCupContents).forEach(cat => {
        const chosenKey = activeCupContents[cat];
        if (chosenKey) {
            empty = false;
            const row = document.createElement('div');
            row.className = 'tracker-item-row';
            row.style.background = '#735d57';
            row.style.border = '2px solid #5c4a45';
            row.innerHTML = `<span>[${cat.toUpperCase()}]</span> ${RECIPE_DB[cat][chosenKey].name}`;
            trackerList.appendChild(row);
        }
    });
    if (empty) trackerList.innerHTML = '<div style="font-size:1.1rem; color:#dfc7c1; font-style:italic; padding:6px; text-align:center;">No layout mapped...</div>';
}

function clearMachineChamber() {
    activeCupContents = { frostings: null, decorations: null, borders: null };
    updateVisualCakeLayers();
    renderPillsMatrixDashboard();

    const statusBanner = document.getElementById('blend-status-banner');
    if (statusBanner) {
        statusBanner.className = ''; statusBanner.innerText = '🍬 Awaiting bakery decorator lines...';
    }
}

function startMachineBakeCycle() {
    if (!activeCupContents.frostings) {
        alert("🚨 ERROR: You can't box up an unfinished cake! Layer down an Icing flavor first.");
        return;
    }
    const dome = document.querySelector('.cup-container');
    const statusBanner = document.getElementById('blend-status-banner');
    
    if (dome) dome.classList.add('machine-spinning-active');
    if (statusBanner) statusBanner.innerText = "✨ SPINNING PIPING WHEEL / SETTING TOPPINGS... ✨";

    setTimeout(() => {
        if (dome) dome.classList.remove('machine-spinning-active');
        evaluateCakeRecipe();
    }, 1200);
}

function evaluateCakeRecipe() {
    const statusBanner = document.getElementById('blend-status-banner');
    const matchFrost = activeCupContents.frostings === activeOrder.frostings;
    const matchDecor = activeCupContents.decorations === activeOrder.decorations;
    const matchBorder = activeCupContents.borders === activeOrder.borders;

    if (matchFrost && matchDecor && matchBorder) {
        if (statusBanner) {
            statusBanner.className = 'banner-correct'; statusBanner.innerText = "💗 EXCELLENT PIPING! TICKET ACCURATE!";
        }
        setTimeout(() => { clearMachineChamber(); generateRandomCustomerOrder(); }, 3000);
    } else {
        if (statusBanner) {
            statusBanner.className = 'banner-incorrect'; statusBanner.innerText = "💔 INCORRECT FROSTING! CAKE REJECTED!";
        }
    }
}
