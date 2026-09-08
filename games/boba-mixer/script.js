// ========================================================
// 1. GAME CONSOLE STATE MANAGEMENT
// ========================================================
let activeOrder = { tea: "", milk: "", syrup: "", topping: "" };
let activeCupContents = { tea: null, milk: null, syrup: null, topping: null };
let currentTabMode = "teas";

// Comprehensive Ingredient Database (Colors map directly to individual fluid stacks)
const RECIPE_DB = {
    teas: {
        black: { name: "Black Tea", color: "#b33939" },
        green: { name: "Green Tea", color: "#26de81" },
        taro: { name: "Taro Extract", color: "#a55eea" },
        matcha: { name: "Matcha Base", color: "#20bf6b" }
    },
    milks: {
        whole: { name: "Whole Cream", color: "rgba(255, 255, 255, 0.85)" },
        oat: { name: "Oat Milk", color: "rgba(247, 215, 148, 0.85)" },
        coconut: { name: "Coconut Cream", color: "rgba(245, 246, 250, 0.9)" },
        none: { name: "No Milk/Clear", color: "transparent" }
    },
    syrups: {
        brownSugar: { name: "Brown Sugar", color: "#574b90" },
        honey: { name: "Pure Honey", color: "#f9ca24" },
        vanilla: { name: "Vanilla Bean", color: "#f7f1e3" },
        none: { name: "Unsweetened", color: "transparent" }
    },
    toppings: {
        boba: { name: "Tapioca Boba", symbol: "⚫" },
        jelly: { name: "Coconut Jelly", symbol: "⬜" },
        pudding: { name: "Egg Custard", symbol: "🟨" },
        none: { name: "No Toppings", symbol: "" }
    }
};

// ========================================================
// 2. INITIALIZATION & BOOT CONTROL
// ========================================================
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

    activeOrder.tea = teaKeys[Math.floor(Math.random() * teaKeys.length)];
    activeOrder.milk = milkKeys[Math.floor(Math.random() * milkKeys.length)];
    activeOrder.syrup = syrupKeys[Math.floor(Math.random() * syrupKeys.length)];
    activeOrder.topping = toppingKeys[Math.floor(Math.random() * toppingKeys.length)];

    const ticket = document.querySelector('.order-ticket');
    if (ticket) {
        ticket.innerHTML = `
            🔹 Base: ${RECIPE_DB.teas[activeOrder.tea].name}<br>
            🔹 Milk: ${RECIPE_DB.milks[activeOrder.milk].name}<br>
            🔹 Sweet: ${RECIPE_DB.syrups[activeOrder.syrup].name}<br>
            🔹 Add-on: ${RECIPE_DB.toppings[activeOrder.topping].name}
        `;
    }
}

// ========================================================
// 3. TAB NAVIGATION & SHELF DRAWER
// ========================================================
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
            btn.innerHTML = `<span style="width:12px; height:12px; background:${item.color}; border:1px solid #000; border-radius:50%; display:inline-block;"></span> ${item.name}`;
        }

        btn.onclick = () => addIngredientToPot(itemKey);
        shelfGrid.appendChild(btn);
    });
}

// ========================================================
// 4. DYNAMIC LAYERED INJECTION SYSTEM
// ========================================================
function addIngredientToPot(key) {
    activeCupContents[currentTabMode] = key;

    // Refresh the right-hand routed menu text dashboard
    renderPillsMatrixDashboard();

    // FIXED: Instantly injects and animates the fluid stack inside your cup container!
    updateVisualCupLayers();
}

function updateVisualCupLayers() {
    const liquidContainer = document.querySelector('.liquid');
    if (!liquidContainer) return;

    // Clear old nested layers so we can rebuild the stacks perfectly
    liquidContainer.innerHTML = '';
    
    let activeLayersCount = 0;
    if (activeCupContents.tea) activeLayersCount++;
    if (activeCupContents.milk && activeCupContents.milk !== 'none') activeLayersCount++;
    if (activeCupContents.syrup && activeCupContents.syrup !== 'none') activeLayersCount++;

    // Calculate height of each individual layer (Max target drink space is 80% cup volume)
    const layerHeight = activeLayersCount > 0 ? (80 / activeLayersCount) : 0;
    
    // Set parent container to hold everything flatly at the base
    liquidContainer.style.height = "100%";
    liquidContainer.style.background = "transparent";
    liquidContainer.style.display = "flex";
    liquidContainer.style.flexDirection = "column-reverse"; // Stack from bottom up

    // 1. Append Base Tea Layer
    if (activeCupContents.tea) {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.teas[activeCupContents.tea].color, layerHeight);
    }

    // 2. Append Milk Layer
    if (activeCupContents.milk && activeCupContents.milk !== 'none') {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.milks[activeCupContents.milk].color, layerHeight);
    }

    // 3. Append Syrup Layer
    if (activeCupContents.syrup && activeCupContents.syrup !== 'none') {
        appendFluidLayerMesh(liquidContainer, RECIPE_DB.syrups[activeCupContents.syrup].color, layerHeight);
    }

    // 4. Draw Topping Symbols
    const toppingsCanvas = document.getElementById('soup-bubble-layer');
    if (toppingsCanvas) {
        toppingsCanvas.innerHTML = '';
        if (activeCupContents.toppings && activeCupContents.toppings !== 'none') {
            const symbol = RECIPE_DB.toppings[activeCupContents.toppings].symbol;
            // Spawn 5 pieces of toppings sitting neatly on the bottom floor grid
            for (let i = 0; i < 5; i++) {
                const item = document.createElement('div');
                item.style.position = 'absolute';
                item.style.bottom = '8px';
                item.style.left = `${15 + (i * 18)}px`;
                item.style.fontSize = '1.2rem';
                item.style.zIndex = '6';
                item.innerText = symbol;
                toppingsCanvas.appendChild(item);
            }
        }
    }
}

function appendFluidLayerMesh(parent, color, height) {
    const mesh = document.createElement('div');
    mesh.style.width = "100%";
    mesh.style.backgroundColor = color;
    mesh.style.opacity = "0.95";
    mesh.style.borderTop = "1px solid rgba(255,255,255,0.15)";
    
    // Run fluid rise volumetric growth animation effect
    mesh.style.height = "0%";
    mesh.style.transition = "height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
    
    parent.appendChild(mesh);
    
    // Trigger transition clip on next display pass cycle
    setTimeout(() => {
        mesh.style.height = `${height}%`;
    }, 10);
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
            row.innerHTML = `<span>[${cat.toUpperCase()}]</span> ${RECIPE_DB[cat][chosenKey].name}`;
            trackerList.appendChild(row);
        }
    });
    
    if (empty) {
        trackerList.innerHTML = '<div style="font-size:1.1rem; color:#a0a5ab; font-style:italic; padding:10px;">Chamber empty...</div>';
    }
}

function clearMachineChamber() {
    activeCupContents = { teas: null, milks: null, syrups: null, toppings: null };
    
    const liquidMesh = document.querySelector('.liquid');
    if (liquidMesh) {
        liquidMesh.innerHTML = '';
        liquidMesh.style.height = "0%";
    }
    
    const toppingsCanvas = document.getElementById('soup-bubble-layer');
    if (toppingsCanvas) toppingsCanvas.innerHTML = '';

    renderPillsMatrixDashboard();

    const statusBanner = document.getElementById('blend-status-banner');
    if (statusBanner) {
        statusBanner.className = '';
        statusBanner.innerText = 'Awaiting brew sequence...';
        statusBanner.style.background = '#11141a';
    }
}

// ========================================================
// 5. ANIMATED CENTRIFUGAL SHAKER ENGINE
// ========================================================
function startMachineBrewCycle() {
    if (!activeCupContents.teas) {
        alert("🚨 ERROR: Machine engine cannot engage without a Liquid Base element loaded into the tubes!");
        return;
    }

    const cup = document.querySelector('.cup-container');
    const statusBanner = document.getElementById('blend-status-banner');
    
    if (cup) cup.classList.add('machine-spinning-active');
    if (statusBanner) {
statusBanner.innerText = "⚡ CENTRIFUGAL HOMOGENIZATION ACTIVE... ⚡";statusBanner.style.background = '#fbbf24';statusBanner.style.color = '#000';}setTimeout(() => {if (cup) cup.classList.remove('machine-spinning-active');evaluateRecipeFormula();}, 1500);}function evaluateRecipeFormula() {const statusBanner = document.getElementById('blend-status-banner');const matchTea = activeCupContents.teas === activeOrder.tea;const matchMilk = activeCupContents.milks === activeOrder.milk;const matchSyrup = activeCupContents.syrups === activeOrder.syrup;const matchTopping = activeCupContents.toppings === activeOrder.topping;if (matchTea && matchMilk && matchSyrup && matchTopping) {if (statusBanner) {statusBanner.className = 'banner-correct';statusBanner.innerText = "✔ PERFECT BLEND! CUSTOMER HAPPY!";statusBanner.style.background = '#2ed573';statusBanner.style.color = '#fff';}setTimeout(() => {clearMachineChamber();generateRandomCustomerOrder();}, 3000);} else {if (statusBanner) {statusBanner.className = 'banner-incorrect';statusBanner.innerText = "❌ WRONG BLEND! INGREDIENTS RUINED!";statusBanner.style.background = '#ff4757';statusBanner.style.color = '#fff';}}}
