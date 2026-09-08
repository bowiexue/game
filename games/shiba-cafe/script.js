// ========================================================
// CAPYBARA ONSEN GAME ENGINE LOGIC WORKSPACE
// ========================================================
let basket = [];
let incomeInterval = null;

// Initialization routine exposes methods onto window for inline html targets
window.addEventListener('DOMContentLoaded', () => {
    window.setLayer = setLayer;
    window.addToBasket = addToBasket;
    window.compilePotRecipe = startPassiveIncomeCycle; 
    window.clearStockpot = clearBasket;
    
    updateBasketUI();
});

function setLayer(layer, emoji) {
    const slotNode = document.getElementById(`layer-${layer}`);
    if (slotNode) {
        slotNode.innerText = emoji;
    }
    // Instantly refresh tracking loops to monitor interval changes
    startPassiveIncomeCycle();
}

function addToBasket(item) {
    if (!basket.includes(item)) {
        basket.push(item);
        updateBasketUI();
    }
}

function clearBasket() {
    basket = [];
    updateBasketUI();
    startPassiveIncomeCycle();
}

function updateBasketUI() {
    const viewNode = document.getElementById('basket-view');
    if (viewNode) {
        viewNode.innerText = basket.length > 0 ? basket.join(', ') : 'Empty Basket';
    }
}

// FIXED PASSIVE GENERATOR: Smoothly slides indicators up without crashing screen bounds
function startPassiveIncomeCycle() {
    if (basket.length >= 2) {
        if (incomeInterval) return; // Disallow spawning duplicate multi-threaded timers
        
        alert("♨️ Spa Treatment Commenced! Harvesting passive income seed tokens every 3 seconds.");
        
        incomeInterval = setInterval(() => {
            let currentTokens = parseInt(localStorage.getItem('hub_tokens') || 100);
            let updatedValue = currentTokens + 5;
            localStorage.setItem('hub_tokens', updatedValue);
            
            // RENDERING FIXED: Anchor element float paths directly onto the dashboard container text node card
            const parentFrame = document.getElementById('basket-view-container');
            if (parentFrame) {
                const popNode = document.createElement('div');
                popNode.className = 'floating-token-pop';
                popNode.innerText = '+5 🪙';
                
                popNode.style.left = `${30 + Math.random() * 45}%`;
                popNode.style.top = '10px';
                
                parentFrame.appendChild(popNode);
                
                setTimeout(() => {
                    popNode.remove();
                }, 1200);
            }
        }, 3000);
    } else {
        if (incomeInterval) {
            clearInterval(incomeInterval);
            incomeInterval = null;
        }
    }
}
