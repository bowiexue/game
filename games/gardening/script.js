// ========================================================
// 1. DYNAMIC 10-SPECIMEN PIXEL ART REGISTRY
// ========================================================
window.BONSAI_REGISTRY = {
    "pine": {
        name: "Classic Pine Bonsai", waterRate: 4, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="20" width="2" height="2" fill="#4CAF50"/><rect x="15" y="22" width="2" height="2" fill="#8B5A2B"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="13" y="16" width="6" height="4" fill="#2E7D32"/><rect x="15" y="20" width="2" height="4" fill="#8B5A2B"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="11" y="12" width="10" height="4" fill="#2E7D32"/><rect x="13" y="8" width="6" height="4" fill="#1B5E20"/><rect x="15" y="12" width="2" height="12" fill="#8B5A2B"/><rect x="13" y="16" width="2" height="2" fill="#8B5A2B"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="13" y="6" width="6" height="4" fill="#A8D5BA"/><rect x="11" y="10" width="10" height="4" fill="#7FBA95"/><rect x="8" y="14" width="14" height="3" fill="#5E9A75"/><rect x="14" y="14" width="2" height="4" fill="#6E473B"/><rect x="12" y="17" width="4" height="3" fill="#6E473B"/><rect x="14" y="20" width="2" height="4" fill="#6E473B"/><rect x="16" y="19" width="3" height="2" fill="#4E2F27"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "sakura": {
        name: "Sakura Blossom", waterRate: 5, fertRate: 4,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="21" width="2" height="3" fill="#5C4033"/><rect x="15" y="19" width="2" height="2" fill="#FFB7C5"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="13" y="15" width="6" height="4" fill="#FFB7C5"/><rect x="15" y="19" width="2" height="5" fill="#5C4033"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="11" y="11" width="10" height="5" fill="#FFB7C5"/><rect x="13" y="8" width="6" height="3" fill="#FF8DA1"/><rect x="15" y="13" width="2" height="11" fill="#5C4033"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="15" y="7" width="2" height="2" fill="#8B0000"/><rect x="8" y="9" width="16" height="4" fill="#FFB7C5"/><rect x="10" y="13" width="12" height="3" fill="#FF8DA1"/><rect x="12" y="16" width="8" height="3" fill="#FFF0F5"/><rect x="15" y="19" width="2" height="5" fill="#6E473B"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "bamboo": {
        name: "Jade Bamboo", waterRate: 6, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="21" width="2" height="3" fill="#2E7D32"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="13" width="2" height="11" fill="#2E7D32"/><rect x="13" y="17" width="6" height="1" fill="#1B5E20"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="6" width="2" height="18" fill="#2E7D32"/><rect x="13" y="18" width="6" height="1" fill="#1B5E20"/><rect x="13" y="11" width="6" height="1" fill="#1B5E20"/><rect x="10" y="10" width="5" height="2" fill="#4CAF50"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="3" width="3" height="21" fill="#388E3C" stroke="#1B5E20" stroke-width="1"/><rect x="11" y="20" width="9" height="1.5" fill="#1B5E20"/><rect x="11" y="13" width="9" height="1.5" fill="#1B5E20"/><rect x="11" y="7" width="9" height="1.5" fill="#1B5E20"/><rect x="6" y="11" width="5" height="2" fill="#81C784"/><rect x="20" y="5" width="5" height="2" fill="#81C784"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "shroom": {
        name: "Canopy Shroom", waterRate: 5, fertRate: 5,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="14" y="21" width="4" height="3" fill="#E2E8F0"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="17" width="2" height="7" fill="#E2E8F0"/><rect x="12" y="14" width="8" height="3" fill="#E63946"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="14" y="13" width="4" height="11" fill="#F8FAFC"/><rect x="9" y="8" width="14" height="5" fill="#E63946"/><rect x="12" y="10" width="2" height="2" fill="#FFF"/><rect x="18" y="9" width="2" height="2" fill="#FFF"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="13" y="10" width="6" height="14" fill="#F8FAFC" stroke="#4A3728" stroke-width="1"/><rect x="4" y="3" width="24" height="8" fill="#D90429" stroke="#4A3728" stroke-width="1.5"/><rect x="7" y="6" width="3" height="2" fill="#FFF"/><rect x="22" y="5" width="2" height="2" fill="#FFF"/><rect x="15" y="4" width="3" height="2" fill="#FFF"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    }
};
// Append the remaining custom species definitions cleanly to the registry object
Object.assign(window.BONSAI_REGISTRY, {
            "crystal": {
        name: "Lunar Moss Bonsai", waterRate: 3, fertRate: 4,
        stages: {
            seedling: `<svg width="100%" height="100%" viewBox="0 0 32 32"><rect x="15" y="21" width="2" height="3" fill="#5c3d75"/><rect x="14" y="20" width="4" height="1" fill="#48cae4"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg width="100%" height="100%" viewBox="0 0 32 32"><rect x="15" y="16" width="2" height="8" fill="#5c3d75"/><rect x="13" y="14" width="6" height="3" fill="#48cae4"/><rect x="12" y="12" width="8" height="2" fill="#00b4d8"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg width="100%" height="100%" viewBox="0 0 32 32"><rect x="15" y="14" width="2" height="10" fill="#5c3d75"/><rect x="13" y="12" width="3" height="3" fill="#5c3d75"/><rect x="10" y="10" width="8" height="4" fill="#00b4d8"/><rect x="12" y="6" width="10" height="4" fill="#0096c7"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            // MATURE PHASE: Organic, winding magical purple wood splitting into tiered shelves of glowing cyan moss blocks
            mature: `<svg width="100%" height="100%" viewBox="0 0 32 32"><rect x="15" y="16" width="2" height="8" fill="#4c2a6a"/><rect x="13" y="14" width="3" height="3" fill="#4c2a6a"/><rect x="16" y="11" width="4" height="3" fill="#3c1e54"/><rect x="7" y="10" width="10" height="5" fill="#00f5d4"/><rect x="14" y="6" width="12" height="6" fill="#00b4d8"/><rect x="9" y="2" width="10" height="5" fill="#90e0ef"/><rect x="10" y="4" width="1" height="1" fill="#fff"/><rect x="22" y="8" width="1" height="1" fill="#fff"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },

    "cactus": {
        name: "Starburst Cactus", waterRate: 2, fertRate: 2,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="2" fill="#1b4332"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="14" y="17" width="4" height="7" fill="#2d6a4f"/><rect x="13" y="19" width="6" height="2" fill="#40916c"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="13" y="12" width="6" height="12" fill="#40916c"/><rect x="11" y="15" width="10" height="4" fill="#52b788"/><rect x="15" y="10" width="2" height="2" fill="#ff4d6d"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="12" y="9" width="8" height="15" fill="#52b788" stroke="#1b4332" stroke-width="1"/><rect x="9" y="12" width="14" height="5" fill="#74c69d"/><rect x="14" y="5" width="4" height="4" fill="#ff4d6d"/><rect x="15" y="3" width="2" height="2" fill="#ff758f"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "fern": {
        name: "Midnight Fern", waterRate: 4, fertRate: 5,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="2" fill="#240046"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="16" width="2" height="8" fill="#3c096c"/><rect x="13" y="18" width="6" height="2" fill="#5a189a"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="11" width="2" height="13" fill="#3c096c"/><rect x="10" y="13" width="12" height="3" fill="#5a189a"/><rect x="12" y="9" width="8" height="3" fill="#7b2cbf"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="8" width="4" height="16" fill="#240046"/><rect x="7" y="12" width="18" height="3" fill="#5a189a"/><rect x="9" y="9" width="14" height="3" fill="#7b2cbf"/><rect x="11" y="4" width="10" height="4" fill="#9d4edd"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "heliotrope": {
        name: "Golden Heliotrope", waterRate: 4, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="2" fill="#059669"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="15" width="2" height="9" fill="#10b981"/><rect x="14" y="13" width="4" height="2" fill="#facc15"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="11" width="2" height="13" fill="#047857"/><rect x="13" y="7" width="6" height="4" fill="#facc15"/><rect x="14" y="8" width="4" height="2" fill="#ca8a04"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="8" width="4" height="16" fill="#047857"/><rect x="10" y="4" width="12" height="4" fill="#facc15" stroke="#3a2e2b" stroke-width="1"/><rect x="12" y="2" width="8" height="2" fill="#fbbf24"/><rect x="13" y="5" width="4" height="2" fill="#78350f"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "thistle": {
        name: "Frost Thistle", waterRate: 3, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="2" fill="#0077b6"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="16" width="2" height="8" fill="#0096c7"/><rect x="13" y="18" width="6" height="2" fill="#03045e"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="11" width="2" height="13" fill="#00b4d8"/><rect x="11" y="13" width="10" height="3" fill="#0077b6"/><rect x="13" y="8" width="6" height="3" fill="#90e0ef"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="9" width="4" height="15" fill="#03045e"/><rect x="8" y="11" width="16" height="4" fill="#0077b6"/><rect x="10" y="7" width="12" height="4" fill="#00b4d8"/><rect x="12" y="3" width="8" height="4" fill="#90e0ef" stroke="#03045e" stroke-width="1"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    },
    "coral": {
        name: "Aquatic Coral Fan", waterRate: 6, fertRate: 4,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="2" fill="#ff4d6d"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="15" width="2" height="9" fill="#ff4d6d"/><rect x="13" y="17" width="6" height="3" fill="#ff758f"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="14" y="11" width="4" height="13" fill="#ff0054"/><rect x="10" y="13" width="12" height="4" fill="#ff5400"/><rect x="12" y="9" width="8" height="3" fill="#ffbd00"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="13" y="7" width="6" height="17" fill="#ff0054" stroke="#700024" stroke-width="1"/><rect x="8" y="12" width="16" height="5" fill="#ff5400"/><rect x="6" y="14" width="20" height="1.5" fill="#ff758f"/><rect x="11" y="8" width="10" height="3" fill="#ff9e00"/><rect x="9" y="24" width="14" height="6" fill="#A0785C"/><rect x="10" y="30" width="12" height="1" fill="#78543C"/></svg>`
        }
    }
});
// ========================================================
// 2. CORE GAME STATE MANAGEMENT
// ========================================================
let activePlant = {
    speciesKey: "pine",
    currentStage: "seedling", 
    growthPoints: 0,          
    hydration: 100,
    nutrients: 100
};

// ========================================================
// 3. CORE CONTROLLERS & INITIALIZATION
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
    // Expose keys directly to the browser window context so HTML onclick selectors can parse them
    window.switchBonsaiSpecimen = switchBonsaiSpecimen;
    window.waterPlant = waterPlant;
    window.fertilizePlant = fertilizePlant;

    updateGardenDashboard();
    
    // SOIL DECAY INTERVAL: Fades environmental moisture levels down every 1 second
    setInterval(() => {
        decaySoilVitals();
    }, 1000);
});

function switchBonsaiSpecimen(key) {
    if (!window.BONSAI_REGISTRY[key]) return;
    activePlant = {
        speciesKey: key,
        currentStage: "seedling", 
        growthPoints: 0,
        hydration: 90,
        nutrients: 90
    };
    updateGardenDashboard();
}

function decaySoilVitals() {
    const config = window.BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Steady background consumption tracking
    activePlant.hydration = Math.max(0, activePlant.hydration - config.waterRate);
    activePlant.nutrients = Math.max(0, activePlant.nutrients - config.fertRate);

    // GROWTH LOGIC: Plant grows ONLY if resource pools are safely above 0%
    if (activePlant.hydration > 0 && activePlant.nutrients > 0 && activePlant.currentStage !== "mature") {
        activePlant.growthPoints += 4.5; 
        
        // Evolve plant assets as progress hits thresholds
        if (activePlant.growthPoints >= 100) {
            activePlant.currentStage = "mature";
        } else if (activePlant.growthPoints >= 65) {
            activePlant.currentStage = "sapling";
        } else if (activePlant.growthPoints >= 30) {
            activePlant.currentStage = "sprout";
        }
    }

    updateGardenDashboard();
    // Inject economy collection tick right before refreshing layouts
    processShopTick(config);
    // Boost growth progression pacing if the roux upgrade is bought
    let accelerationMultiplier = playerEconomy.hasGrowthRoux ? 7.0 : 4.5;
    activePlant.growthPoints += accelerationMultiplier;

}

function waterPlant() {
    activePlant.hydration = Math.min(100, activePlant.hydration + 25);
    updateGardenDashboard();
}

function fertilizePlant() {
    activePlant.nutrients = Math.min(100, activePlant.nutrients + 20);
    updateGardenDashboard();
}

function updateGardenDashboard() {
    // UPDATED: Dynamically alters internal SVG leaf hex colors to look parched and dried out when water is 0
function updateGardenDashboard() {
    const config = window.BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Refresh Dashboard DOM Text Labels
    const titleNode = document.getElementById('plant-title-node');
    const stageNode = document.getElementById('plant-stage-node');
    if (titleNode) titleNode.innerText = config.name;
    if (stageNode) stageNode.innerText = activePlant.currentStage.toUpperCase();

    // Refresh Vitals Metric Progress Bars
    const hydraBar = document.getElementById('hydration-bar');
    const nutriBar = document.getElementById('nutrients-bar');
    if (hydraBar) hydraBar.style.width = `${activePlant.hydration}%`;
    if (nutriBar) nutriBar.style.width = `${activePlant.nutrients}%`;

    // INJECT PIXEL ART DOME MARKUP
    const canvasSlot = document.getElementById('bonsai-core-vector');
    if (canvasSlot) {
        let svgAsset = config.stages[activePlant.currentStage];
        
        // 1. GOLD POT UPGRADE MECHANIC: Check if player bought the premium container
        if (playerEconomy.hasGoldPot) {
            svgAsset = svgAsset.replaceAll('#A0785C', '#ffd166').replaceAll('#78543C', '#f5b041');
        }

        // 2. CRITICAL DRIED OUT VISUAL REPAINT SCRIPT (Ditches basic grayscale filter)
        if (activePlant.hydration <= 0 || activePlant.nutrients <= 0) {
            if (stageNode) stageNode.innerText = "DRIED OUT 💀";
            
            // Systematically scan and swap green and neon plant colors for crunchier, dead foliage colors
            svgAsset = svgAsset
                // Repaint Pine & Bamboo healthy greens into crisp, parched straw tones
                .replaceAll('#4CAF50', '#C4A482')
                .replaceAll('#2E7D32', '#A0522D')
                .replaceAll('#1B5E20', '#6E473B')
                .replaceAll('#388E3C', '#8B5A2B')
                .replaceAll('#81C784', '#D2B48C')
                // Repaint custom winding-pine multi-shade canopy leaves into autumn decay shades
                .replaceAll('#A8D5BA', '#D2B48C')
                .replaceAll('#7FBA95', '#B58B63')
                .replaceAll('#5E9A75', '#8E6242')
                // Repaint Sakura pastel pink petals into brittle, wilted dark mulches
                .replaceAll('#FFB7C5', '#A0522D')
                .replaceAll('#FF8DA1', '#8B4513')
                .replaceAll('#FBCce3', '#8E5A42')
                .replaceAll('#F4A2C4', '#6E3728')
                .replaceAll('#E87FA7', '#4A1D13')
                // Repaint Lunar Moss neon blues/cyans into shriveled, dusty ashen grays
                .replaceAll('#00f5d4', '#A0A0A0')
                .replaceAll('#00b4d8', '#707070')
                .replaceAll('#90e0ef', '#D0D0D0')
                .replaceAll('#4CC9F0', '#888888');

            // Add a subtle shrivel layout nudge to show it's drooped and dehydrated
            canvasSlot.style.filter = "contrast(1.1) brightness(0.85)";
            canvasSlot.style.transform = "translateY(4px) scaleY(0.95)";
        } else {
            canvasSlot.style.filter = "none";
            canvasSlot.style.transform = "none";
        }
        
        canvasSlot.innerHTML = svgAsset;
    }
}
}
// ========================================================
// 4. ECONOMY & UPGRADES SHOP ENGINE SUBSYSTEM
// ========================================================
let playerEconomy = {
    coins: JSON.parse(localStorage.getItem('bonsai_coins_v1')) || 20, // Free 20 starting gold coins
    hasSprinkler: false,
    hasGrowthRoux: false,
    hasGoldPot: false
};

// Hook economy triggers smoothly into your existing boot sequences
const baseDOMBoot = window.addEventListener('DOMContentLoaded', () => {
    window.buyShopItem = buyShopItem;
    refreshShopInterface();
});

// Run this every time decaySoilVitals fires to feed points and update balances
function processShopTick(config) {
    // 1. REWARD LOOP: If the plant is fully mature and healthy, drop a coin into the wallet!
    if (activePlant.currentStage === "mature" && activePlant.hydration > 0 && activePlant.nutrients > 0) {
        playerEconomy.coins += 1;
        localStorage.setItem('bonsai_coins_v1', JSON.stringify(playerEconomy.coins));
    }

    // 2. AUTO-SPRINKLER MECHANIC: Automatically pumps moisture floor checks up if activated
    if (playerEconomy.hasSprinkler && activePlant.hydration <= 15) {
        activePlant.hydration = Math.min(100, activePlant.hydration + 20);
    }

    refreshShopInterface();
}

function buyShopItem(itemKey) {
    if (itemKey === 'sprinkler' && !playerEconomy.hasSprinkler) {
        if (playerEconomy.coins >= 50) {
            playerEconomy.coins -= 50;
            playerEconomy.hasSprinkler = true;
            alert("⚙️ Auto-Sprinkler Installed! It will patch moisture pools if they drop low.");
        } else alert("❌ Not enough Seed Coins!");
    } 
    else if (itemKey === 'roux' && !playerEconomy.hasGrowthRoux) {
        if (playerEconomy.coins >= 75) {
            playerEconomy.coins -= 75;
            playerEconomy.hasGrowthRoux = true;
            alert("🧪 Growth Roux Activated! Cell mutations scale up much faster.");
        } else alert("❌ Not enough Seed Coins!");
    }
    else if (itemKey === 'goldPot' && !playerEconomy.hasGoldPot) {
        if (playerEconomy.coins >= 120) {
            playerEconomy.coins -= 120;
            playerEconomy.hasGoldPot = true;
            alert("👑 Golden Ceramic Pot Purchased! Visual frames updated.");
        } else alert("❌ Not enough Seed Coins!");
    }
    
    localStorage.setItem('bonsai_coins_v1', JSON.stringify(playerEconomy.coins));
    updateGardenDashboard();
}

function refreshShopInterface() {
    const coinLbl = document.getElementById('player-wallet-lbl');
    if (coinLbl) coinLbl.innerText = playerEconomy.coins;

    // Gray out bought upgrade buttons so they look locked/installed
    const sprBtn = document.getElementById('shop-sprinkler-btn');
    const rouxBtn = document.getElementById('shop-roux-btn');
    const potBtn = document.getElementById('shop-pot-btn');

    if (sprBtn && playerEconomy.hasSprinkler) { sprBtn.innerText = "⚙️ Sprinkler [INSTALLED]"; sprBtn.style.opacity = "0.5"; sprBtn.disabled = true; }
    if (rouxBtn && playerEconomy.hasGrowthRoux) { rouxBtn.innerText = "🧪 Growth Roux [ACTIVE]"; rouxBtn.style.opacity = "0.5"; rouxBtn.disabled = true; }
    if (potBtn && playerEconomy.hasGoldPot) { potBtn.innerText = "👑 Gold Pot [OWNED]"; potBtn.style.opacity = "0.5"; potBtn.disabled = true; }
}
