// SYNC BALANCES ACROSS ARCHITECTURE PORTALS
let tokens = parseInt(localStorage.getItem('hub_tokens')) || 100;
let seeds = parseInt(localStorage.getItem('garden_seeds')) || 2;

const tokenUi = document.getElementById('token-ui');
const seedUi = document.getElementById('seed-ui');
const buySeedBtn = document.getElementById('buy-seed-btn');

// Tracking states for active growing crop modules
let plotsData = [
    { id: 0, status: 'empty', water: 100, growth: 0, interval: null },
    { id: 1, status: 'empty', water: 100, growth: 0, interval: null },
    { id: 2, status: 'empty', water: 100, growth: 0, interval: null }
];

function saveGlobalState() {
    localStorage.setItem('hub_tokens', tokens);
    localStorage.setItem('garden_seeds', seeds);
    tokenUi.innerText = tokens;
    seedUi.innerText = seeds;
}
saveGlobalState();

// Buy Seed processing operations
buySeedBtn.addEventListener('click', () => {
    if (tokens >= 15) {
        tokens -= 15;
        seeds++;
        saveGlobalState();
    } else {
        alert("Earn more coins inside your Tamagotchi pet lounge first!");
    }
});

// Configure engine loops mapping button states across layout plots
document.querySelectorAll('.plot-card').forEach((card, index) => {
    const btn = card.querySelector('.action-btn');
    btn.addEventListener('click', () => handlePlotAction(index, card));
});

function handlePlotAction(id, card) {
    let plot = plotsData[id];
    const btn = card.querySelector('.action-btn');
    const icon = card.querySelector('.stage-icon');
    const txt = card.querySelector('.status-txt');
    const bar = card.querySelector('.progress');

    if (plot.status === 'empty') {
        if (seeds > 0) {
            seeds--;
            plot.status = 'growing';
            plot.growth = 0;
            plot.water = 100;
            saveGlobalState();

            txt.innerText = "Sprout (Watering)";
            icon.innerText = "🌱";
            btn.innerText = "💧 Give Water";
            btn.className = "action-btn water";
            bar.className = "progress water-fill";
            bar.style.width = "100%";

            // Initiate growing/drying loop tickers
            plot.interval = setInterval(() => tickCrop(id, card), 1000);
        } else {
            alert("Purchase some Carrot Seeds from the Nursery above first!");
        }
    } 
    else if (plot.status === 'growing') {
        // Hydrate the dry soil matrix back up to peak levels
        plot.water = Math.min(100, plot.water + 35);
        bar.className = "progress water-fill";
        bar.style.width = plot.water + "%";
    } 
    else if (plot.status === 'mature') {
        // Purge plot parameters and claim rewards payout balances
        clearInterval(plot.interval);
        plot.status = 'empty';
        plot.growth = 0;
        tokens += 45; // Generates a net +30 token profit on investment
        saveGlobalState();

        icon.innerText = "🟫";
        txt.innerText = "Empty Soil Patch";
        btn.innerText = "Plant Crop";
        btn.className = "action-btn plant";
        bar.style.width = "0%";
    }
}

function tickCrop(id, card) {
    let plot = plotsData[id];
    const bar = card.querySelector('.progress');
    const icon = card.querySelector('.stage-icon');
    const txt = card.querySelector('.status-txt');
    const btn = card.querySelector('.action-btn');

    if (plot.status !== 'growing') return;

    // Deplete fluid saturation vectors over time loop iterations
    plot.water = Math.max(0, plot.water - 8);

    if (plot.water > 0) {
        // Grow crop ONLY if the soil has water
        plot.growth += 5;
        
        // Visual toggle: Switch rendering views dynamically as growth metrics pass threshold markers
        if (plot.growth >= 50 && plot.growth < 100) {
            icon.innerText = "🌿";
            txt.innerText = "Mid-Stage Veggie";
        }

        // Handle full harvest maturation milestones
        if (plot.growth >= 100) {
            plot.status = 'mature';
            icon.innerText = "🥕";
            txt.innerText = "Plump Carrot Ready!";
            btn.innerText = "🧺 Harvest Crop (+45🪙)";
            btn.className = "action-btn harvest";
            bar.className = "progress grow-fill";
            bar.style.width = "100%";
            return;
        }
    }

    // Toggle bar displays based on moisture alert warnings
    if (plot.water <= 0) {
        txt.innerText = "⚠️ Dried Out! (Needs Water)";
        icon.innerText = "🥀";
    } else {
        // Render current hydration meter line updates
        bar.className = "progress water-fill";
        bar.style.width = plot.water + "%";
    }
}
