// ========================================================
// REAL-TIME RETRO CAKE CLIMBER ARCADE PHYSICS ENGINE
// ========================================================
let gameWidth = 0;
let score = 0;
let comboStreak = 0;
let isGameOver = false;

// Slider properties map layout
let activeSlice = { left: 10, width: 140, direction: 1, speed: 4 };
let towerStack = []; // Holds objects: { left: X, width: Y, bottom: Z, color: Hex }

const PASTE_PALETTE = ["#ffb7b2", "#ffdac1", "#e2f0cb", "#b5f2d3", "#a0c4ff", "#e87fa7", "#ffccd5"];

window.addEventListener('DOMContentLoaded', () => {
    const view = document.getElementById('game-viewport');
    if (view) gameWidth = view.clientWidth;

    // Attach click events securely to inputs
    document.getElementById('master-drop-trigger-btn').onclick = executeSliceDropCommand;
    window.addEventListener('keydown', (e) => { if (e.code === "Space") { e.preventDefault(); executeSliceDropCommand(); } });

    resetCakeTowerGame();
    runRealTimeGameTicker();
});

function resetCakeTowerGame() {
    score = 0; comboStreak = 0; isGameOver = false;
    towerStack = [
        { left: 40, width: 240, bottom: 0, color: "#5c4a45" } // Firm wide ground plate cake foundation
    ];
    activeSlice = { left: 10, width: 160, direction: 1, speed: 4.5 };
    
    document.getElementById('tower-anchor-stack').innerHTML = '';
    document.getElementById('score-val').innerText = score;
    document.getElementById('combo-val').innerText = comboStreak;
    document.getElementById('blend-status-banner').className = '';
    document.getElementById('blend-status-banner').innerText = '🍬 TIMING MATTERS: PRESS SWITCH TO DROP!';
    
    renderEntireAnchoredTower();
}

// THE GAME TICKER LOOP: Animates the piece back and forth smoothly across the screen width
function runRealTimeGameTicker() {
    if (isGameOver) return;

    const sliceNode = document.getElementById('active-sliding-slice');
    if (sliceNode) {
        // Increment horizontal coordinates
        activeSlice.left += activeSlice.speed * activeSlice.direction;
        
        // Edge bounce check logic
        if (activeSlice.left + activeSlice.width >= gameWidth - 10) {
            activeSlice.direction = -1;
        } else if (activeSlice.left <= 10) {
            activeSlice.direction = 1;
        }
        
        sliceNode.style.left = `${activeSlice.left}px`;
        sliceNode.style.width = `${activeSlice.width}px`;
        sliceNode.style.background = PASTE_PALETTE[score % PASTE_PALETTE.length];
    }

    requestAnimationFrame(runRealTimeGameTicker);
}

function executeSliceDropCommand() {
    if (isGameOver) { resetCakeTowerGame(); return; }

    const targetBase = towerStack[towerStack.length - 1];
    
    // Isolate clipping coordinates boundaries
    let sliceLeft = activeSlice.left;
    let sliceRight = activeSlice.left + activeSlice.width;
    let baseLeft = targetBase.left;
    let baseRight = targetBase.left + targetBase.width;

    // Calculate overlap dimensions
    let finalLeft = Math.max(sliceLeft, baseLeft);
    let finalRight = Math.min(sliceRight, baseRight);
    let finalWidth = finalRight - finalLeft;

    const banner = document.getElementById('blend-status-banner');

    // CRITICAL MISS: Completely dropped into thin air void space!
    if (finalWidth <= 0) {
        triggerGameOverState();
        return;
    }

    // COMBO CHECK: If alignment is extremely accurate (within 6 pixels), award a PERFECT BLEND!
    if (Math.abs(sliceLeft - baseLeft) <= 6) {
        comboStreak++;
        finalLeft = baseLeft; // Lock it perfectly to stack straight up
        finalWidth = targetBase.width; // Restore piece width as a streak bonus reward!
        if (banner) { banner.className = 'banner-correct'; banner.innerText = `✨ PERFECT BLEND! STREAK x${comboStreak}! ✨`; }
    } else {
        comboStreak = 0; // Breakdown chain values instantly if offset
        if (banner) { banner.className = ''; banner.innerText = '🍰 TIER PLACED! EDGES TRIMMED DOWN.'; }
    }

    // Save newly placed node onto tower list array
    let floorHeight = 16;
    let newBottom = towerStack.length * floorHeight;
    
    towerStack.push({
        left: finalLeft,
        width: finalWidth,
        bottom: newBottom,
        color: PASTE_PALETTE[score % PASTE_PALETTE.length]
    });

    score++;
    document.getElementById('score-val').innerText = score;
    document.getElementById('combo-val').innerText = comboStreak;

    // Adjust parameters for the next sliding slice loop row
    activeSlice.width = finalWidth;
    activeSlice.left = 10;
    activeSlice.direction = 1;
    activeSlice.speed = Math.min(8, 4.5 + (score * 0.25)); // Speeds up as the tower climbs!

    // Shift viewport container downward if tower gets too high to prevent roof leaks
    const towerFrame = document.getElementById('tower-anchor-stack');
    if (newBottom > 160 && towerFrame) {
        towerFrame.style.transform = `translateY(${newBottom - 160}px)`;
    }

    renderEntireAnchoredTower();
    updateMilestoneJournalLog();
}

function renderEntireAnchoredTower() {
    const container = document.getElementById('tower-anchor-stack');
    container.innerHTML = '';

    // Paint every floor block cleanly inside absolute coordinates view
    towerStack.forEach((floor, idx) => {
        if (idx === 0) return; // Skip invisible base foundation
        const block = document.createElement('div');
        block.className = 'placed-cake-slice';
        block.style.left = `${floor.left}px`;
        block.style.width = `${floor.width}px`;
        block.style.bottom = `${floor.bottom}px`;
        block.style.backgroundColor = floor.color;
        
        // Add frosting dollops on top layer block
        if (idx === towerStack.length - 1) {
            block.style.borderTop = "5px dotted #fff";
        }
        
        container.appendChild(block);
    });
}

function triggerGameOverState() {
    isGameOver = true;
    const banner = document.getElementById('blend-status-banner');
    if (banner) { banner.className = 'banner-incorrect'; banner.innerText = `💔 TOWER COLLAPSED! CRASHED AT ${score} TIER FLATS! 💔`; }
    
    document.getElementById('master-drop-trigger-btn').innerText = "🕹️ PLAY AGAIN!";
}

function updateMilestoneJournalLog() {
    const journal = document.getElementById('tracker-pills-list');
    if (!journal) return;

    journal.innerHTML = `
        <div class="tracker-item-row">✨ Personal Best: ${Math.max(score, 12)} Floors</div>
        <div class="tracker-item-row">${score >= 5 ? "🍓 Strawberry Frosting [UNLOCKED]" : "🍓 Strawberry Frosting: Reach 5 Floors"}</div>
        <div class="tracker-item-row">${score >= 12 ? "🍵 Matcha Shogun [UNLOCKED]" : "🍵 Matcha Shogun: Reach 12 Floors"}</div>
        <div class="tracker-item-row">${score >= 20 ? "🌌 Cosmic Velvet [UNLOCKED]" : "🌌 Cosmic Velvet: Reach 20 Floors"}</div>
    `;
}
