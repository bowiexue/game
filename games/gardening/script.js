// 1. EXTENDED VARIATIONS DATABASE (10 Completely Distinct Geometries)
const BONSAI_REGISTRY = {
    "pine": {
        name: "Classic Pine Bonsai", waterRate: 3.5, fertRate: 2.0,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="20" width="2" height="8" fill="#5c4033"/><path d="M12,20 L20,20 L16,14 Z" fill="#2e7d32"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="14" width="4" height="14" fill="#5c4033"/><path d="M8,15 L24,15 L16,6 Z" fill="#1b5e20"/><path d="M10,9 L22,9 L16,2 Z" fill="#1b5e20"/></svg>`
        }
    },
    "sakura": {
        name: "Sakura Bloom", waterRate: 4.5, fertRate: 3.5,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q18,20 14,18" fill="none" stroke="#5c4033" stroke-width="2"/><circle cx="14" cy="18" r="3" fill="#f48fb1"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q20,16 12,12 T20,4" fill="none" stroke="#5c4033" stroke-width="3"/><circle cx="12" cy="12" r="5" fill="#ffb74d"/><circle cx="20" cy="4" r="6" fill="#f48fb1"/><circle cx="14" cy="7" r="4" fill="#f48fb1"/></svg>`
        }
    },
    "crystal": {
        name: "Prismatic Crystal Geode", waterRate: 1.5, fertRate: 5.0,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><polygon points="16,28 20,20 12,20" fill="#4ea8de"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><polygon points="16,28 24,10 19,28 8,14 22,28 27,6" fill="#560bad"/><polygon points="16,28 15,2 18,28" fill="#b5179e"/></svg>`
        }
    },
    "bamboo": {
        name: "Segmented Jade Bamboo", waterRate: 6.0, fertRate: 2.5,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="16" width="2" height="12" fill="#2d6a4f"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="4" width="4" height="24" fill="#40916c"/><rect x="13" y="18" width,="6" height="2" fill="#1b4332"/><rect x="13" y="10" width="6" height="2" fill="#1b4332"/></svg>`
        }
    },
    "shroom": {
        name: "Spotted Canopy Shroom", waterRate: 5.5, fertRate: 4.0,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="20" width="2" height="8" fill="#e2e8f0"/><path d="M12,20 Q16,14 20,20 Z" fill="#e63946"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="13" y="14" width="6" height="14" fill="#f8fafc"/><path d="M5,14 Q16,0 27,14 Z" fill="#e63946"/><circle cx="11" cy="8" r="2" fill="#fff"/><circle cx="21" cy="9" r="2" fill="#fff"/></svg>`
        }
    },
    "cactus": {
        name: "Starburst Cactus", waterRate: 1.0, fertRate: 1.5,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><circle cx="16" cy="24" r="4" fill="#386641"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><circle cx="16" cy="20" r="9" fill="#386641"/><line x1="7" y1="20" x2="25" y2="20" stroke="#ffb703" stroke-width="2"/><polygon points="16,6 19,11 13,11" fill="#bc4749"/></svg>`
        }
    },
    "fern": {
        name: "Midnight Void Fern", waterRate: 4.0, fertRate: 4.5,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q13,20 11,16" fill="none" stroke="#3c096c" stroke-width="3"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q10,14 5,11" fill="none" stroke="#240046" stroke-width="3"/><path d="M16,28 Q22,14 27,11" fill="none" stroke="#240046" stroke-width="3"/><path d="M16,28 L16,4" fill="none" stroke="#5a189a" stroke-width="3.5"/></svg>`
        }
    },
    "heliotrope": {
        name: "Golden Heliotrope", waterRate: 3.8, fertRate: 2.2,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><line x1="16" y1="28" x2="16" y2="18" stroke="#70e000" stroke-width="3"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><line x1="16" y1="28" x2="16" y2="12" stroke="#38b000" stroke-width="3"/><circle cx="16" cy="11" r="8" fill="#ffcc00"/><circle cx="16" cy="11" r="3" fill="#3a2e2b"/></svg>`
        }
    },
    "thistle": {
        name: "Frost Thistle", waterRate: 2.8, fertRate: 3.0,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 L13,20 L16,22 L19,20 Z" fill="#a2d2ff"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,12" stroke="#00b4d8" stroke-width="3"/><polygon points="16,4 23,12 18,13 24,19 16,16 8,19 14,13 9,12" fill="#caf0f8"/></svg>`
        }
    },
    "coral": {
        name: "Aquatic Coral Fan", waterRate: 6.5, fertRate: 3.8,
        stages: {
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 C14,22 17,20 16,16" fill="none" stroke="#ffccd5" stroke-width="3"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 C11,18 7,16 5,11" fill="none" stroke="#ff4d6d" stroke-width="3.5"/><path d="M16,28 C21,18 25,16 27,11" fill="none" stroke="#ff4d6d" stroke-width="3.5"/><path d="M16,28 C16,21 14,15 16,6" fill="none" stroke="#ff758f" stroke-width="3.5"/></svg>`
        }
    }
};

// 2. CORE GAME STATE MANAGEMENT
let activePlant = {
    speciesKey: "pine",
    currentStage: "sprout", // 'sprout' -> 'mature'
    growthPoints: 0,
    hydration: 100,        // Drops over time
    nutrients: 100         // Drops over time
};

// 3. INITIAL BOOT AND TICK SEQUENCE CONTROLLERS
window.addEventListener('DOMContentLoaded', () => {
    setupSpecimenButtons();
    updateGardenDashboard();
    
    // ENVIRONMENTAL TICKERCLOCK: Constantly runs drains in the background
    setInterval(() => {
        processEnvironmentalDecay();
    }, 1000);
});

function setupSpecimenButtons() {
    // Connects your menu options dynamically with tracking data triggers
    const pineBtn = document.querySelector('button[innerText*="Pine"]') || document.getElementsByTagName('button')[0];
    const sakuraBtn = document.querySelector('button[innerText*="Sakura"]') || document.getElementsByTagName('button')[1];
    
    if(pineBtn) pineBtn.onclick = () => switchBonsaiSpecimen("pine");
    if(sakuraBtn) sakuraBtn.onclick = () => switchBonsaiSpecimen("sakura");
}

function switchBonsaiSpecimen(key) {
    if (!BONSAI_REGISTRY[key]) return;
    activePlant = {
        speciesKey: key,
        currentStage: "sprout",
        growthPoints: 0,
        hydration: 80,
        nutrients: 80
    };
    updateGardenDashboard();
}

// 4. ENVIRONMENTAL DECAY LOOP ENGINE
function processEnvironmentalDecay() {
    const config = BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // STEADY DRAIN: Slowly drops values based on individual plant settings
    activePlant.hydration = Math.max(0, activePlant.hydration - config.waterRate);
    activePlant.nutrients = Math.max(0, activePlant.nutrients - config.fertRate);

    // DYNAMIC GROWTH: Only scale up if both resources stay above 0%
    if (activePlant.hydration > 0 && activePlant.nutrients > 0 && activePlant.currentStage !== "mature") {
        activePlant.growthPoints += 2;
        
        // Evolve plant to mature asset graphics code layer once hitting threshold
        if (activePlant.growthPoints >= 100) {
            activePlant.currentStage = "mature";
        }
    }

    updateGardenDashboard();
}

// 5. USER INTERACTIVE CLICK CONTROLS
function waterPlant() {
    // Replenish moisture pool by hitting the button
    activePlant.hydration = Math.min(100, activePlant.hydration + 20);
    updateGardenDashboard();
}

// Make sure your HTML fertilize button triggers this function name
function fertilizePlant() {
    // Replenish nutrient matrix pools safely up to ceiling cap
    activePlant.nutrients = Math.min(100, activePlant.nutrients + 15);
    updateGardenDashboard();
}

// 6. DASHBOARD DOM GRAPHICS ENGINE
function updateGardenDashboard() {
    const config = BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Get current asset view elements
    const labelTitle = document.querySelector('h2') || document.getElementById('plant-title-node');
    const labelStage = document.querySelector('h4') || document.getElementById('plant-stage-node');
    
    // Bind current text labels smoothly
    if (labelTitle) labelTitle.innerText = config.name;
    if (labelStage) labelStage.innerText = activePlant.currentStage.toUpperCase();

    // Map your bar graphics (Make sure your display bars have tracking matching properties/text indicators)
    const hydraDisplay = document.getElementById('hydration-bar') || document.querySelector('[id*="hydra"]');
    const nutriDisplay = document.getElementById('nutrients-bar') || document.querySelector('[id*="nutri"]');
    
    if (hydraDisplay) hydraDisplay.style.width = `${activePlant.hydration}%`;
    if (nutriDisplay) nutriDisplay.style.width = `${activePlant.nutrients}%`;

    // INJECT PLANT STRUCTURAL ILLUSTRATION
    const graphicsWrapper = document.getElementById('bonsai-core-vector') || document.querySelector('.bonsai-core') || document.querySelector('h4').nextElementSibling;
    if (graphicsWrapper) {
        let activeSVG = config.stages[activePlant.currentStage];
        
        // WILTED DECAY FALLBACK LOOK: If levels flatline, turn the drawing completely faded gray!
        if (activePlant.hydration <= 0 || activePlant.nutrients <= 0) {
            graphicsWrapper.style.filter = "grayscale(1) contrast(0.6) translateY(2px)";
            if (labelStage) labelStage.innerText = "DRIED OUT 💀";
        } else {
            graphicsWrapper.style.filter = "none";
        }
        
        graphicsWrapper.innerHTML = activeSVG;
    }
}

