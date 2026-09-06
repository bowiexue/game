let tokens = parseInt(localStorage.getItem('hub_tokens')) || 100;
let seeds = { carrot: 2, rose: 0, pumpkin: 0 };

// Restore seed vaults arrays securely from system memories
if(localStorage.getItem('garden_vault')) {
    seeds = JSON.parse(localStorage.getItem('garden_vault'));
}

const tokenUi = document.getElementById('token-ui');
const seedUi = document.getElementById('seed-ui');
const buyBtn = document.getElementById('buy-seed-btn');

// Dynamic crop catalog arrays listing growth constraints 
const cropCatalog = {
    carrot: { label: 'Carrot', cost: 15, payout: 45, time: 100, icons: ['🌱','🌿','🥕'] },
    rose: { label: 'Aesthetic Rose', cost: 40, payout: 110, time: 70, icons: ['🌱','🌿','🌹'] },
    pumpkin: { label: 'Golden Pumpkin', cost: 100, payout: 350, time: 40, icons: ['🌱','🌿','🎃'] }
};

let activeSeedSelection = 'carrot';

// Re-render inventory headers
function saveGlobalState() {
    localStorage.setItem('hub_tokens', tokens);
    localStorage.setItem('garden_vault', JSON.stringify(seeds));
    tokenUi.innerText = tokens;
    seedUi.innerText = `${seeds.carrot} Carrots | ${seeds.rose} Roses | ${seeds.pumpkin} Pumpkins`;
}

// Dynamically morph shop button context based on template selectors
function injectShopControls() {
    const banner = document.querySelector('.shop-banner');
    banner.innerHTML = `
        <div style="text-align:left;">
            <label><strong>Select Seed Profile:</strong></label>
            <select id="seed-shop-selector" style="padding:4px; margin-bottom:5px;">
                <option value="carrot">Carrot Seed (15🪙)</option>
                <option value="rose">Rose Seed (40🪙)</option>
                <option value="pumpkin">Golden Pumpkin (100🪙)</option>
            </select>
            <div id="seed-ui" style="font-size:0.9rem; color:#57606f; margin-top:4px;"></div>
        </div>
        <button class="buy-btn" id="buy-seed-btn">Purchase Selected</button>
    `;
}
injectShopControls();

const seedSelector = document.getElementById('seed-shop-selector');
seedSelector.addEventListener('change', (e) => { activeSeedSelection = e.target.value; });

document.getElementById('buy-seed-btn').addEventListener('click', () => {
    let chosen = cropCatalog[activeSeedSelection];
    if (tokens >= chosen.cost) {
        tokens -= chosen.cost;
        seeds[activeSeedSelection]++;
        saveGlobalState();
    } else {
        alert("Tokens low! Play Star Catcher to fill up your wallet.");
    }
});

let plotsData = [
    { id: 0, status: 'empty', water: 100, growth: 0, type: null, interval: null },
    { id: 1, status: 'empty', water: 100, growth: 0, type: null, interval: null },
    { id: 2, status: 'empty', water: 100, growth: 0, type: null, interval: null }
];

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
        if (seeds[activeSeedSelection] > 0) {
            seeds[activeSeedSelection]--;
            plot.status = 'growing';
            plot.type = activeSeedSelection;
            plot.growth = 0;
            plot.water = 100;
            saveGlobalState();

            let config = cropCatalog[plot.type];
            txt.innerText = `${config.label} (Sprout)`;
            icon.innerText = config.icons[0];
            btn.innerText = "💧 Give Water";
            btn.className = "action-btn water";
            bar.className = "progress water-fill";
            bar.style.width = "100%";

            plot.interval = setInterval(() => tickCrop(id, card), 1000);
        } else {
            alert(`Buy some ${activeSeedSelection} seeds from the vendor cabinet above first!`);
        }
    } 
    else if (plot.status === 'growing') {
        plot.water = Math.min(100, plot.water + 35);
        bar.style.width = plot.water + "%";
    } 
    else if (plot.status === 'mature') {
        clearInterval(plot.interval);
        let config = cropCatalog[plot.type];
        plot.status = 'empty';
        tokens += config.payout;
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
    let config = cropCatalog[plot.type];
    const bar = card.querySelector('.progress');
    const icon = card.querySelector('.stage-icon');
    const txt = card.querySelector('.status-txt');
    const btn = card.querySelector('.action-btn');

    if (plot.status !== 'growing') return;

    plot.water = Math.max(0, plot.water - 6);

    if (plot.water > 0) {
        plot.growth += 5;
        if (plot.growth >= 50 && plot.growth < 100) {
            icon.innerText = config.icons[1];
            txt.innerText = `Growing ${config.label}`;
        }
        if (plot.growth >= 100) {
            plot.status = 'mature';
            icon.innerText = config.icons[2];
            txt.innerText = `${config.label} Harvest Ready!`;
            btn.innerText = `🧺 Harvest (+${config.payout}🪙)`;
            btn.className = "action-btn harvest";
            bar.className = "progress grow-fill";
            bar.style.width = "100%";
            return;
        }
    }

    if (plot.water <= 0) {
        txt.innerText = "⚠️ Dried Out! (Needs Water)";
    } else {
        bar.className = "progress water-fill";
        bar.style.width = plot.water + "%";
    }
}
saveGlobalState();
