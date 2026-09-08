window.BONSAI_REGISTRY = {
    "pine": {
        name: "Classic Pine Bonsai", waterRate: 4, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="28" r="2.5" fill="#a0522d"/><path d="M16,28 L16,24" stroke="#4ade80" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q18,22 15,18" fill="none" stroke="#5c4033" stroke-width="2.5"/><path d="M15,18 Q11,15 15,14 Q19,16 15,18" fill="#22c55e"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,14" stroke="#5c4033" stroke-width="3"/><path d="M16,18 L22,15" stroke="#5c4033" stroke-width="2"/><path d="M16,14 L10,10" stroke="#5c4033" stroke-width="2"/><path d="M22,15 C25,12 20,10 22,15 Z" fill="#15803d"/><path d="M10,10 C7,8 12,6 10,10 Z" fill="#15803d"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q18,16 14,12" fill="none" stroke="#4a3728" stroke-width="4"/><path d="M14,12 Q8,12 16,4 Q24,12 14,12 Z" fill="#1b5e20"/><path d="M15,16 Q24,16 20,10" fill="none" stroke="#4a3728" stroke-width="3"/><path d="M20,10 Q14,8 22,4 Q28,10 20,10 Z" fill="#14532d"/></svg>`
        }
    },
    "sakura": {
        name: "Sakura Blossom", waterRate: 5, fertRate: 4,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="28" r="2.5" fill="#a0522d"/><path d="M16,28 L17,25" stroke="#f48fb1" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q15,22 17,19" fill="none" stroke="#5c4033" stroke-width="2.5"/><circle cx="17" cy="19" r="2.5" fill="#f48fb1"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 Q14,20 16,14" fill="none" stroke="#5c4033" stroke-width="3"/><circle cx="13" cy="16" r="3.5" fill="#f48fb1"/><circle cx="19" cy="12" r="4" fill="#f48fb1"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q20,18 14,12 T22,4" fill="none" stroke="#5c4033" stroke-width="3.5"/><circle cx="14" cy="12" r="6" fill="#f48fb1"/><circle cx="22" cy="4" r="7" fill="#ffb74d"/><ellipse cx="15" cy="6" rx="5" ry="4" fill="#ffccd5"/></svg>`
        }
    },
    "bamboo": {
        name: "Jade Bamboo", waterRate: 6, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><rect x="15" y="25" width="2" height="4" fill="#10b981"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="18" width="2" height="11" fill="#059669"/><rect x="14" y="18" width="4" height="1.5" fill="#3a2e2b"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="15" y="10" width="2" height="19" fill="#047857"/><rect x="13" y="20" width="6" height="2" fill="#1b4332"/><rect x="13" y="12" width="6" height="2" fill="#1b4332"/><path d="M17,12 Q23,9 21,6" fill="none" stroke="#059669" stroke-width="2"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="14" y="4" width="4" height="25" fill="#40916c" stroke="#3a2e2b" stroke-width="1.5"/><rect x="12" y="22" width="8" height="2" fill="#1b4332"/><rect x="12" y="14" width="8" height="2" fill="#1b4332"/><rect x="12" y="7" width="8" height="2" fill="#1b4332"/><path d="M18,14 Q26,10 24,5" fill="none" stroke="#40916c" stroke-width="2.5"/><path d="M14,7 Q6,5 8,2" fill="none" stroke="#40916c" stroke-width="2.5"/></svg>`
        }
    },
    "shroom": {
        name: "Canopy Shroom", waterRate: 5, fertRate: 5,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><ellipse cx="16" cy="27" rx="3" ry="1.5" fill="#e2e8f0"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><rect x="15" y="22" width="2" height="6" fill="#f8fafc"/><path d="M13,22 Q16,17 19,22 Z" fill="#ef4444"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><rect x="14" y="16" width="4" height="12" fill="#f8fafc" stroke="#3a2e2b"/><path d="M10,16 Q16,8 22,16 Z" fill="#ef4444" stroke="#3a2e2b"/><circle cx="16" cy="11" r="1.5" fill="#fff"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><rect x="12" y="12" width="8" height="16" fill="#f8fafc" stroke="#3a2e2b" stroke-width="2"/><path d="M4,12 Q16,-2 28,12 Z" fill="#ef4444" stroke="#3a2e2b" stroke-width="2.5"/><circle cx="10" cy="6" r="2" fill="#fff"/><circle cx="22" cy="7" r="2" fill="#fff"/><circle cx="16" cy="4" r="2.5" fill="#fff"/></svg>`
        }
    },
    "crystal": {
        name: "Prismatic Crystal", waterRate: 2, fertRate: 6,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><polygon points="16,26 18,29 14,29" fill="#cbd5e1"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><polygon points="16,29 20,20 12,20" fill="#38bdf8" stroke="#3a2e2b"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><polygon points="16,29 22,12 18,29 10,16" fill="#a855f7" stroke="#3a2e2b" stroke-width="2"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><polygon points="16,29 25,6 20,29 8,10 22,29 28,12" fill="#db2777" stroke="#3a2e2b" stroke-width="2.5"/><polygon points="16,29 14,2 18,29" fill="#6366f1"/></svg>`
        }
    },
    "cactus": {
        name: "Starburst Cactus", waterRate: 2, fertRate: 2,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="27" r="2" fill="#2d6a4f"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><circle cx="16" cy="24" r="4.5" fill="#40916c"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="22" r="7" fill="#52b788"/><line x1="16" y1="12" x2="16" y2="30" stroke="#fff" stroke-dasharray="2"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><circle cx="16" cy="20" r="10" fill="#74c69d" stroke="#3a2e2b" stroke-width="2"/><path d="M16,6 L19,10 L13,10 Z" fill="#ff4d6d"/></svg>`
        }
    },
    "fern": {
        name: "Midnight Fern", waterRate: 4, fertRate: 5,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,25" stroke="#3c096c" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 Q13,22 14,18" fill="none" stroke="#3c096c" stroke-width="3"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 Q11,20 10,14" fill="none" stroke="#240046" stroke-width="3.5"/><path d="M16,28 Q21,20 22,14" fill="none" stroke="#240046" stroke-width="3.5"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 Q10,14 5,11" fill="none" stroke="#240046" stroke-width="4"/><path d="M16,28 Q22,14 27,11" fill="none" stroke="#240046" stroke-width="4"/><path d="M16,28 L16,4" fill="none" stroke="#5a189a" stroke-width="4"/></svg>`
        }
    },
    "heliotrope": {
        name: "Golden Heliotrope", waterRate: 4, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="27" r="2" fill="#ffd166"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><line x1="16" y1="28" x2="16" y2="20" stroke="#06d6a0" stroke-width="3"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><line x1="16" y1="28" x2="16" y2="15" stroke="#06d6a0" stroke-width="3"/><circle cx="16" cy="13" r="4" fill="#ffd166"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><line x1="16" y1="28" x2="16" y2="12" stroke="#06d6a0" stroke-width="3.5"/><circle cx="16" cy="11" r="9" fill="#ffd166" stroke="#3a2e2b" stroke-width="2"/><circle cx="16" cy="11" r="3.5" fill="#073b4c"/></svg>`
        }
    },
    "thistle": {
        name: "Frost Thistle", waterRate: 3, fertRate: 3,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><path d="M16,28 L15,26" stroke="#118ab2" stroke-width="2"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 L13,21 L16,23 L19,21 Z" fill="#118ab2"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,14" stroke="#118ab2" stroke-width="3"/><polygon points="16,10 20,15 12,15" fill="#ef476f"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 L16,12" stroke="#118ab2" stroke-width="3.5"/><polygon points="16,4 23,12 18,13 24,19 16,16 8,19 14,13 9,12" fill="#073b4c" stroke="#3a2e2b" stroke-width="1.5"/></svg>`
        }
    },
    "coral": {
        name: "Aquatic Coral Fan", waterRate: 6, fertRate: 4,
        stages: {
            seedling: `<svg viewBox="0 0 32 32"><circle cx="16" cy="28" r="2" fill="#ff4d6d"/></svg>`,
            sprout: `<svg viewBox="0 0 32 32"><path d="M16,28 C14,22 17,20 16,17" fill="none" stroke="#ff4d6d" stroke-width="3"/></svg>`,
            sapling: `<svg viewBox="0 0 32 32"><path d="M16,28 C12,19 9,17 7,12" fill="none" stroke="#ff4d6d" stroke-width="3.5"/><path d="M16,28 C20,19 23,17 25,12" fill="none" stroke="#ff4d6d" stroke-width="3.5"/></svg>`,
            mature: `<svg viewBox="0 0 32 32"><path d="M16,28 C11,18 7,16 5,11" fill="none" stroke="#ff4d6d" stroke-width="4"/><path d="M16,28 C21,18 25,16 27,11" fill="none" stroke="#ff4d6d" stroke-width="4"/><path d="M16,28 C16,21 14,15 16,5" fill="none" stroke="#ff758f" stroke-width="4"/></svg>`
        }
    }
};
// 2. CORE GAME STATE MANAGEMENT
let activePlant = {
    speciesKey: "pine",
    currentStage: "seedling", // Constrained to seedling profile values at boot
    growthPoints: 0,
    hydration: 100,
    nutrients: 100
};

// 3. INITIAL BOOT AND TICK SEQUENCE CONTROLLERS
window.addEventListener('DOMContentLoaded', () => {
    // Structural Global Window Exposure so inline HTML elements find methods cleanly
    window.switchBonsaiSpecimen = switchBonsaiSpecimen;
    window.waterPlant = waterPlant;
    window.fertilizePlant = fertilizePlant;

    updateGardenDashboard();
    
    // ENVIRONMENTAL TICKERCLOCK: Drops moisture profiles every second
    setInterval(() => {
        decaySoilVitals();
    }, 1000);
});

function switchBonsaiSpecimen(key) {
    if (!window.BONSAI_REGISTRY[key]) return;
    activePlant = {
        speciesKey: key,
        currentStage: "seedling", // Reverts selection targets back to seedling
        growthPoints: 0,
        hydration: 90,
        nutrients: 90
    };
    updateGardenDashboard();
}

function decaySoilVitals() {
    const config = window.BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Steady moisture depletion calculations
    activePlant.hydration = Math.max(0, activePlant.hydration - config.waterRate);
    activePlant.nutrients = Math.max(0, activePlant.nutrients - config.fertRate);

    // EVOLUTION DEPLOYER: Only scale progress metrics forward if stats are above 0%
    if (activePlant.hydration > 0 && activePlant.nutrients > 0 && activePlant.currentStage !== "mature") {
        activePlant.growthPoints += 4.5;
        
        // Check milestone thresholds to trigger evolutionary layer graphics swaps
        if (activePlant.growthPoints >= 100) {
            activePlant.currentStage = "mature";
        } else if (activePlant.growthPoints >= 65) {
            activePlant.currentStage = "sapling";
        } else if (activePlant.growthPoints >= 30) {
            activePlant.currentStage = "sprout";
        }
    }

    updateGardenDashboard();
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
    const config = window.BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Map DOM Text Node targets
    const titleNode = document.getElementById('plant-title-node');
    const stageNode = document.getElementById('plant-stage-node');
    if (titleNode) titleNode.innerText = config.name;
    if (stageNode) stageNode.innerText = activePlant.currentStage.toUpperCase();

    // Bind Meter Progress value states
    const hydraBar = document.getElementById('hydration-bar');
    const nutriBar = document.getElementById('nutrients-bar');
    if (hydraBar) hydraBar.style.width = `${activePlant.hydration}%`;
    if (nutriBar) nutriBar.style.width = `${activePlant.nutrients}%`;

    // INJECT PLANT LAYER MARKUP VECTOR DRAWING
    const canvasSlot = document.getElementById('bonsai-core-vector');
    if (canvasSlot) {
        let svgAsset = config.stages[activePlant.currentStage];
        
        // WILTED DRIED OUT RESPONSE FALLBACK
        if (activePlant.hydration <= 0 || activePlant.nutrients <= 0) {
            canvasSlot.style.filter = "grayscale(1) brightness(0.7) translateY(3px)";
            if (stageNode) stageNode.innerText = "DRIED OUT 💀";
        } else {
            canvasSlot.style.filter = "none";
            // DYNAMIC HEIGHT SCALE SCALER: Growing progress expands physical canvas scale dimensions!
            canvasSlot.style.transform = `scale(${0.5 + (activePlant.growthPoints * 0.005)})`;
        }
        
        canvasSlot.innerHTML = svgAsset;
    }
}
