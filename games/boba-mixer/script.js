// ========================================================
// 1. GAME CONSOLE STATE MANAGEMENT
// ========================================================
let activeOrder = { tea: "", milk: "", syrup: "", topping: "" };
let activeCupContents = { tea: null, milk: null, syrup: null, topping: null };
let currentTabMode = "teas";

// Comprehensive Ingredient Database (Colors map directly to the volumetric cup fluid)
const RECIPE_DB = {
    teas: {
        black: { name: "Black Tea", color: "#b33939" },
        green: { name: "Green Tea", color: "#26de81" },
        taro: { name: "Taro Extract", color: "#a55eea" },
        matcha: { name: "Matcha Base", color: "#20bf6b" }
    },
    milks: {
        whole: { name: "Whole Cream", color: "#ffffff" },
        oat: { name: "Oat Milk", color: "#f7d794" },
        coconut: { name: "Coconut Cream", color: "#f5f6fa" },
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
    // Bind all function triggers directly to the global window context for HTML onclick hooks
    window.toggleTabMode = toggleTabMode;
    window.addIngredientToMachine = addIngredientToPot; // Maps your existing HTML hook
    window.compilePotRecipe = startMachineBrewCycle;    // Maps your existing HTML hook
    window.clearStockpot = clearMachineChamber;         // Maps your existing HTML hook

    generateRandomCustomerOrder();
    loadActiveIngredientShelf();
    clearMachineChamber();
});

// Generates a target work order receipt for the player to match
function generateRandomCustomerOrder() {
    const teaKeys = Object.keys(RECIPE_DB.teas);
    const milkKeys = Object.keys(RECIPE_DB.milks);
    const syrupKeys = Object.keys(RECIPE_DB.syrups);
    const toppingKeys = Object.keys(RECIPE_DB.toppings);

    activeOrder.tea = teaKeys[Math.floor(Math.random() * teaKeys.length)];
    activeOrder.milk = milkKeys[Math.floor(Math.random() * milkKeys.length)];
    activeOrder.syrup = syrupKeys[Math.floor(Math.random() * syrupKeys.length)];
    activeOrder.topping = toppingKeys[Math.floor(Math.random() * toppingKeys.length)];

    // Print order to the paper display ticket card block
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
    
    // Toggle active highlighting classes across tabs
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

    // Pull the ingredients belonging to the active tab mode selection
    const activePool = RECIPE_DB[currentTabMode];
    Object.keys(activePool).forEach(itemKey => {
        const item = activePool[itemKey];
        const btn = document.createElement('button');
        btn.className = 'ing-btn';
        
        // Add visual identifiers (use symbols for toppings, color bubbles for fluids)
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
// 4. MIXING VALVES & CORE INPUT POOLS
// ========================================================
function addIngredientToPot(key) {
    // Inject selected elements into their correct logical tracking compartments
    activeCupContents[currentTabMode] = key;

    // Dynamically build a tracking list inside your POT MIXTURE side panel
    const trackerList = document.getElementById('tracker-pills-list');
    if (trackerList) {
        trackerList.innerHTML = '';
        Object.keys(activeCupContents).forEach(cat => {
            const chosenKey = activeCupContents[cat];
            if (chosenKey) {
                const row = document.createElement('div');
                row.className = 'tracker-item-row';
                row.innerHTML = `<span>[${cat.toUpperCase()}]</span> ${RECIPE_DB[cat][chosenKey].name}`;
                trackerList.appendChild(row);
            }
        });
    }
}

function clearMachineChamber() {
    activeCupContents = { teas: null, milks: null, syrups: null, toppings: null };
    
    // Reset fluid meshes and graphics overlays
    const liquidMesh = document.querySelector('.liquid');
    if (liquidMesh) liquidMesh.style.height = "0%";
    
    const bobaCanvas = document.getElementById('tracker-pills-list');
    if (bobaCanvas) bobaCanvas.innerHTML = '<div style="font-size:1.1rem; color:#a0a5ab; font-style:italic; padding:10px;">Chamber empty...</div>';

    // Remove old message banners
    const statusBanner = document.getElementById('blend-status-banner');
    if (statusBanner) {
        statusBanner.className = '';
        statusBanner.innerText = 'Awaiting brew sequence...';
    }
}

// ========================================================
// 5. ANIMATED CENTRIFUGAL SHAKER CORE ENGINE
// ========================================================
function startMachineBrewCycle() {
    // Safety check: Don't cook an entirely empty void chamber
    if (!activeCupContents.teas) {
        alert("🚨 ERROR: Machine engine cannot engage without a Liquid Base element loaded into the tubes!");
        return;
    }

    const cup = document.querySelector('.cup-container');
    const statusBanner = document.getElementById('blend-status-banner');
    
    // Step 1: ENGAGE SPINNING SHAKING SEQUENCE ANIMATION
    if (cup) cup.classList.add('machine-spinning-active');
    if (statusBanner) statusBanner.innerText = "⚡ ENGINE SPINNING / HOMOGENIZING... ⚡";

    // Step 2: Set physical machine spin centrifuge timer duration for 1500ms
    setTimeout(() => {
        // Halt shaking cycles
        if (cup) cup.classList.remove('machine-spinning-active');

        // Step 3: Run fluid pour animation and calculate chemical accuracy scores
        evaluateRecipeFormula();
    }, 1500);
}

function evaluateRecipeFormula() {
    const liquidMesh = document.querySelector('.liquid');
    const statusBanner = document.getElementById('blend-status-banner');

    // Pull fluid color settings maps
    const baseTeaColor = RECIPE_DB.teas[activeCupContents.teas].color;
    
    if (liquidMesh) {
        liquidMesh.style.backgroundColor = baseTeaColor;
        liquidMesh.style.height = "75%"; // Physically fill the cup view up to line bounds!
    }

    // SCORING ALGORITHM: Verify player targets match work order indexes completely
    const matchTea = activeCupContents.teas === activeOrder.tea;
    const matchMilk = activeCupContents.milks === activeOrder.milk;
    const matchSyrup = activeCupContents.syrups === activeOrder.syrup;
    const matchTopping = activeCupContents.toppings === activeOrder.topping;

    if (matchTea && matchMilk && matchSyrup && matchTopping) {
        // Success formula
        if (statusBanner) {
            statusBanner.className = 'banner-correct';
            statusBanner.innerText = "✔ PERFECT BLEND! CUSTOMER HAPPY!";
        }
        // Spawn a brand new challenge contract automatically after 3.5 seconds
        setTimeout(() => {
            clearMachineChamber();
            generateRandomCustomerOrder();
        }, 3500);
    } else {
        // Sludge formula failure
        if (statusBanner) {
            statusBanner.className = 'banner-incorrect';
            statusBanner.innerText = "❌ WRONG BLEND! INGREDIENTS RUINED!";
        }
    }
}
