let basket = [];
let currentRole = "🧑‍✈️";
let incomeInterval = null;

function setLayer(layer, emoji) {
    document.getElementById(`layer-${layer}`).innerText = emoji;
    triggerActivityTrigger();
}

function addToBasket(item) {
    if(!basket.includes(item)) {
        basket.push(item);
        updateBasketUI();
    }
}

function clearBasket() {
    basket = [];
    updateBasketUI();
    triggerActivityTrigger();
}

function updateBasketUI() {
    const el = document.getElementById('basket-view');
    el.innerText = basket.length > 0 ? basket.join(', ') : 'Empty Basket';
}

// FIX: Spawns the passive continuous token harvesting cycle engine mechanics
function triggerActivityTrigger() {
    if (basket.length >= 2) {
        if (incomeInterval) clearInterval(incomeInterval);
        alert("♨️ Spa Treatment Commenced! You are now harvesting passive income tokens!");
        
        incomeInterval = setInterval(() => {
            let currentTokens = parseInt(localStorage.getItem('hub_tokens') || 100);
            let updatedVal = currentTokens + 5;
            localStorage.setItem('hub_tokens', updatedVal);
            
            // Render indicator text float elements
            const pop = document.createElement('div');
            pop.style.position = 'absolute';
            pop.style.color = '#2ecc71';
            pop.style.fontWeight = 'bold';
            pop.style.top = '20px';
            pop.innerText = '+5 🪙';
            document.getElementById('basket-view').appendChild(pop);
            setTimeout(() => pop.remove(), 1200);
        }, 3000);
    } else {
        if(incomeInterval) {
            clearInterval(incomeInterval);
            incomeInterval = null;
        }
    }
}
