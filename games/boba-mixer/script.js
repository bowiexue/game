// ========================================================
// 1. GAME CONSOLE STATE MANAGEMENT
// ========================================================
let activeOrder = { teas: "", milks: "", syrups: "", toppings: "" };
let activeCupContents = { teas: null, milks: null, syrups: null, toppings: null };
let currentTabMode = "teas";

// Comprehensive Aesthetic Beverage Shop Registry Databases
const RECIPE_DB = {
    teas: {
        black: { name: "Assam Black Tea", color: "#b07d62" },    /* Warm soft pastel caramel amber */
        green: { name: "Jasmine Green", color: "#caffbf" },     /* Dreamy pastel mint olive lime */
        taro: { name: "Taro Sweet Cream", color: "#d8bbff" },   /* Rich pastel taro lavender */
        matcha: { name: "Whisked Matcha", color: "#95d5b2" }    /* Aesthetic soft creamy jade matcha */
    },
    milks: {
        whole: { name: "Sweet Cream", color: "#fefae0" },       /* Warm pastel ivory cream milk */
        oat: { name: "Oat Milk", color: "#faedcd" },           /* Toasted vanilla oat biscuit amber */
        coconut: { name: "Coconut Milk", color: "#f8f9fa" },   /* Pure pastel snowflake white */
        none: { name: "Clear Infusion", color: "transparent" }
    },
    syrups: {
        brownSugar: { name: "Okinawa Sugar", color: "#6c584c" }, /* Soft earthy cinnamon wood brown */
        honey: { name: "Wild Honey", color: "#fde2e4" },         /* Warm pink soft peach flower honey */
        vanilla: { name: "Vanilla Bean", color: "#fff0f5" },     /* Custard vanilla silk sheen */
        none: { name: "No Sweeteners", color: "transparent" }
    },
    toppings: {
        boba: { name: "Tapioca Boba", symbol: "⚫" },
        jelly: { name: "Lychee Jelly", symbol: "⬜" },
        pudding: { name: "Egg Pudding", symbol: "🟨" },
        none: { name: "No Add-ons", symbol: "" }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    window.toggleTabMode = toggleTabMode;
    window.addIngredientToMachine = addIngredientToPot;
    window.compilePotRecipe = startMachineBrewCycle;
    window.clearStockpot = clearMachineChamber;

    generateRandomCustomerOrder();
    loadActiveIngredientShelf();
    clearMachineChamber();
});

function generateRandomCustomerOrder() {
    const teaKeys = Object.keys(RECIPE_DB.teas);
    const milkKeys = Object.keys(RECIPE_DB.milks);
    const syrupKeys = Object.keys(RECIPE_DB.syrups);
    const toppingKeys = Object.keys(RECIPE_DB.toppings);

    activeOrder.teas = teaKeys[Math.floor(Math.random() * teaKeys.length)];
    activeOrder.milks = milkKeys[Math.floor(Math.random() * milkKeys.length)];
    activeOrder.syrups = syrupKeys[Math.floor(Math.random() * syrupKeys.length)];
    activeOrder.toppings = toppingKeys[Math.floor(Math.random() * toppingKeys.length)];

    const ticket = document.querySelector('.order-ticket');
    if (ticket) {
        ticket.innerHTML = `
            💟 Base: ${RECIPE_DB.teas[activeOrder.teas].name}<br>
            💟 Milk: ${RECIPE_DB.milks[activeOrder.milks].name}<br>
            💟 Syrup: ${RECIPE_DB.syrups[activeOrder.syrups].name}<br>
            💟 Topping: ${RECIPE_DB.toppings[activeOrder.toppings].name}
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
        
        if (currentTabMode === 'toppings') {
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
    updateVisualCupLayers();
}

function updateVisualCupLayers() {
    const liquidContainer = document.querySelector('.liquid');
    if (!liquidContainer) return;

    liquidContainer.innerHTML = '';
    
    let activeLayersCount = 0;
    if (activeCupContents.teas) activeLayersCount++;
    if (activeCupContents.milks && activeCupContents.milks !== 'none') activeLayersCount++;
    if (activeCupContents.syrups && activeCupContents.syrups !== 'none') activeLayersCount++;

    const layerHeight = activeLayersCount > 0 ? (100 / activeLayersCount) : 0;
    
    liquidContainer.style.height = "75%"; 
    liquidContainer.style.background = "transparent";
    liquidContainer.style.display = "flex";
    liquidContainer.style.flexDirection = "column-reverse"; 

    if (activeCupContents.teas) {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.teas[activeCupContents.teas].color, layerHeight);
    }
    if (activeCupContents.milks && activeCupContents.milks !== 'none') {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.milks[activeCupContents.milks].color, layerHeight);
    }
    if (activeCupContents.syrups && activeCupContents.syrups !== 'none') {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.syrups[activeCupContents.syrups].color, layerHeight);
    }

    const toppingsCanvas = document.getElementById('soup-bubble-layer');
    if (toppingsCanvas) {
        toppingsCanvas.innerHTML = '';
        if (activeCupContents.toppings && activeCupContents.toppings !== 'none') {
            for (let i = 0; i < 12; i++) {
                const item = document.createElement('div');
                item.className = 'pixel-boba-bubble';
                
                let rowOffset = i < 6 ? 0 : 10;
                let columnX = i < 6 ? (14 + (i * 18)) : (22 + ((i-6) * 18));
                
                item.style.left = `${columnX}px`;
                item.style.bottom = `${8 + rowOffset}px`;
                
                if (activeCupContents.toppings === 'pudding') item.style.background = '#ffd166';
                else if (activeCupContents.toppings === 'jelly') item.style.background = '#f8f9fa';
                else item.style.background = '#5c4a45';

                toppingsCanvas.appendChild(item);
            }
        }
    }
}

function appendFluidLayerMesh(parent, color, height) {
    const mesh = document.createElement('div');
    mesh.style.width = "100%";
    mesh.style.backgroundColor = color;
    mesh.style.height = "0%";
    mesh.style.transition = "height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
    parent.appendChild(mesh);
    setTimeout(() => { mesh.style.height = `${height}%`; }, 10);
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
    if (empty) trackerList.innerHTML = '<div style="font-size:1.1rem; color:#dfc7c1; font-style:italic; padding:6px; text-align:center;">No pipes routed...</div>';
}

function clearMachineChamber() {
    activeCupContents = { teas: null, milks: null, syrups: null, toppings: null };
    const liquidMesh = document.querySelector('.liquid');
    if (liquidMesh) { liquidMesh.innerHTML = ''; liquidMesh.style.height = "0%"; liquidMesh.style.background = "transparent"; }
    const toppingsCanvas = document.getElementById('soup-bubble-layer');
    if (toppingsCanvas) toppingsCanvas.innerHTML = '';
    renderPillsMatrixDashboard();

    const statusBanner = document.getElementById('blend-status-banner');
    if (statusBanner) {
        statusBanner.className = ''; statusBanner.innerText = '🍬 Awaiting blending loop sequence...';
    }
}

function startMachineBrewCycle() {
    if (!activeCupContents.teas) {
        alert("🚨 ERROR: Machine engine cannot engage without a Liquid Base element loaded into the tubes!");
        return;
    }
    const cup = document.querySelector('.cup-container');
    const statusBanner = document.getElementById('blend-status-banner');
    if (cup) cup.classList.add('machine-spinning-active');
    if (statusBanner) {
        statusBanner.innerText = "✨ HOMOGENIZING GRADIENT EMBEDMENT MATRIX... ✨";
    }
    
    setTimeout(() => {
        if (cup) cup.classList.remove('machine-spinning-active');
        fuseFluidLayersTogether();
        evaluateRecipeFormula();
    }, 1500);
}

function fuseFluidLayersTogether() {
    const liquidContainer = document.querySelector('.liquid');
    if (!liquidContainer) return;

    const c1 = RECIPE_DB.teas[activeCupContents.teas].color;
    const c2 = activeCupContents.milks ? RECIPE_DB.milks[activeCupContents.milks].color : c1;

    liquidContainer.innerHTML = '';
    liquidContainer.style.display = "block";
    liquidContainer.style.background = `linear-gradient(0deg, ${c1} 20%, ${c2} 100%)`;
}

function evaluateRecipeFormula() {
    const statusBanner = document.getElementById('blend-status-banner');
    const matchTea = activeCupContents.teas === activeOrder.teas;
    const matchMilk = activeCupContents.milks === activeOrder.milks;
    const matchSyrup = activeCupContents.syrups === activeOrder.syrups;
    const matchTopping = activeCupContents.toppings === activeOrder.toppings;

    if (matchTea && matchMilk && matchSyrup && matchTopping) {
        if (statusBanner) {
            statusBanner.className = 'banner-correct'; statusBanner.innerText = "状况 PERFECT BLEND! KITCHEN SUCCESS!";
        }
        setTimeout(() => { clearMachineChamber(); generateRandomCustomerOrder(); }, 3000);
    } else {
        if (statusBanner) {
            statusBanner.className = 'banner-incorrect'; statusBanner.innerText = "💔 INCORRECT FORMULA! EXPERIMENT FAILED!";
        }
    }
}
