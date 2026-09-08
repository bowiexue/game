let activePlant = {
    speciesKey: "pine",
    currentStage: "seedling", // Starts strictly as a seedling!
    growthPoints: 0,          // Scales up from 0 to 100
    hydration: 100,
    nutrients: 100
};

window.addEventListener('DOMContentLoaded', () => {
    updateGardenDashboard();
    
    // BACKEND CHRONOMETER: Ticks environment matrix metrics down every 1000ms
    setInterval(() => {
        decaySoilVitals();
    }, 1000);
});

function switchBonsaiSpecimen(key) {
    if (!window.BONSAI_REGISTRY[key]) return;
    activePlant = {
        speciesKey: key,
        currentStage: "seedling", // Always reset new instances back to basic seedling profiles
        growthPoints: 0,
        hydration: 90,
        nutrients: 90
    };
    updateGardenDashboard();
}

function decaySoilVitals() {
    const config = window.BONSAI_REGISTRY[activePlant.speciesKey];
    if (!config) return;

    // Steady background consumption tracking metrics
    activePlant.hydration = Math.max(0, activePlant.hydration - config.waterRate);
    activePlant.nutrients = Math.max(0, activePlant.nutrients - config.fertRate);

    // SYSTEM PROGRESSION: Only allow expansion if resource pools sit above absolute zero
    if (activePlant.hydration > 0 && activePlant.nutrients > 0 && activePlant.currentStage !== "mature") {
        activePlant.growthPoints += 3.5; // Controls the pacing rate speed metrics
        
        // STAGE EVOLUTION CHECKS: Plant organically changes shapes and branches out over time
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

    // Update Text Labels
    const titleNode = document.getElementById('plant-title-node');
    const stageNode = document.getElementById('plant-stage-node');
    if (titleNode) titleNode.innerText = config.name;
    if (stageNode) stageNode.innerText = activePlant.currentStage.toUpperCase();

    // Map Progress Bars
    const hydraBar = document.getElementById('hydration-bar');
    const nutriBar = document.getElementById('nutrients-bar');
    if (hydraBar) hydraBar.style.width = `${activePlant.hydration}%`;
    if (nutriBar) nutriBar.style.width = `${activePlant.nutrients}%`;

    // INJECT DETAILED SVG MARKUP CANVAS
    const canvasSlot = document.getElementById('bonsai-core-vector');
    if (canvasSlot) {
        let svgAsset = config.stages[activePlant.currentStage];
        
        // DRY OUT VISUAL RESPONSE: Turns plant faded gray if water drops to 0
        if (activePlant.hydration <= 0 || activePlant.nutrients <= 0) {
            canvasSlot.style.filter = "grayscale(1) brightness(0.7) translateY(3px)";
            if (stageNode) stageNode.innerText = "DRIED OUT 💀";
        } else {
            canvasSlot.style.filter = "none";
            canvasSlot.style.transform = `scale(${0.6 + (activePlant.growthPoints * 0.004)})`; // Physically grows scale bigger over time!
        }
        
        canvasSlot.innerHTML = svgAsset;
    }
}
