
// High fidelity hand-shaded retro vector database library map arrays
const blueprints = {
    beds: {
        cozyBed: `<svg viewBox="0 0 16 16"><path d="M1,6 H15 V12 H1 Z" fill="#2980b9" stroke="#2c3e50" stroke-width="1"/><rect x="1" y="6" width="4" height="3" fill="#ecf0f1" stroke="#2c3e50" stroke-width="0.5"/><rect x="5" y="7" width="10" height="5" fill="#3498db"/></svg>`,
        pinkBed: `<svg viewBox="0 0 16 16"><path d="M1,6 H15 V12 H1 Z" fill="#b33939" stroke="#2c3e50" stroke-width="1"/><rect x="1" y="6" width="4" height="3" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><rect x="5" y="7" width="10" height="5" fill="#ffb3ba"/></svg>`,
        futon: `<svg viewBox="0 0 16 16"><rect x="2" y="8" width="12" height="4" fill="#f7d794" stroke="#2c3e50" stroke-width="1"/><rect x="10" y="8" width="4" height="3" fill="#ffffff"/></svg>`
    },
    seating: {
        redCouch: `<svg viewBox="0 0 16 16"><path d="M1,6 H15 V11 H1 Z" fill="#c0392b" stroke="#2c3e50" stroke-width="1"/><rect x="3" y="8" width="10" height="3" fill="#e74c3c"/></svg>`,
        comfyArm: `<svg viewBox="0 0 16 16"><path d="M3,6 H13 V12 H3 Z" fill="#d4a373" stroke="#2c3e50" stroke-width="1"/><rect x="5" y="8" width="6" height="4" fill="#f4ebd9"/></svg>`,
        stool: `<svg viewBox="0 0 16 16"><path d="M5,10 H11 V13 M6,6 H10 V10 H6 Z" fill="#cd6133" stroke="#2c3e50" stroke-width="1"/></svg>`
    },
    tables: {
        woodTable: `<svg viewBox="0 0 16 16"><path d="M1,6 H15 V8 H1 Z M3,8 H4 V13 M12,8 H13 V13" fill="#d35400" stroke="#2c3e50" stroke-width="1"/></svg>`,
        teaDesk: `<svg viewBox="0 0 16 16"><path d="M2,8 H14 V10 H2 Z M4,10 H5 V13 M11,10 H12 V13" fill="#845131" stroke="#2c3e50" stroke-width="1"/></svg>`,
        nightstand: `<svg viewBox="0 0 16 16"><rect x="3" y="6" width="10" height="8" fill="#cc8e35" stroke="#2c3e50" stroke-width="1"/><rect x="5" y="8" width="6" height="2" fill="#ffb142" stroke="#2c3e50" stroke-width="0.5"/></svg>`
    },
    electronics: {
        pcSetup: `<svg viewBox="0 0 16 16"><rect x="4" y="4" width="8" height="6" fill="#2c3e50" stroke="#2c3e50" stroke-width="1"/><rect x="5" y="5" width="6" height="4" fill="#34495e"/><rect x="7" y="10" width="2" height="3" fill="#7f8c8d"/></svg>`,
        lofiRadio: `<svg viewBox="0 0 16 16"><rect x="3" y="6" width="10" height="6" fill="#f39c12" stroke="#2c3e50" stroke-width="1"/><circle cx="6" cy="9" r="1.5" fill="#2c3e50"/><rect x="9" y="8" width="3" height="2" fill="#7f8c8d"/></svg>`,
        floorLamp: `<svg viewBox="0 0 16 16"><path d="M7,2 H9 V5 H7 Z M8,5 V14" stroke="#2c3e50" stroke-width="1"/><path d="M6,2 H10 V4 H6 Z" fill="#f1c40f"/></svg>`
    },
    plants: {
        bonsaiPot: `<svg viewBox="0 0 16 16"><path d="M5,5 Q8,2 7,1 Q10,3 7,5" fill="#27ae60" stroke="#112412" stroke-width="0.5"/><path d="M3,7 H13 V10 H3 Z" fill="#d2691e" stroke="#2c3e50" stroke-width="1"/></svg>`,
        tallFern: `<svg viewBox="0 0 16 16"><path d="M4,7 Q8,2 5,1 M8,7 Q8,1 9,2 M12,7 Q8,3 11,1" fill="#2ecc71" stroke="#2c3e50" stroke-width="0.5"/><rect x="6" y="7" width="4" height="5" fill="#cd6133" stroke="#2c3e50" stroke-width="1"/></svg>`,
        hangingIvy: `<svg viewBox="0 0 16 16"><path d="M2,1 H14 M4,1 V8 M12,1 V6" stroke="#2c3e50"/><circle cx="4" cy="5" r="2" fill="#27ae60"/><circle cx="12" cy="4" r="1.5" fill="#2ecc71"/></svg>`
    },
    plush: {
        bearPlush: `<svg viewBox="0 0 16 16"><circle cx="5" cy="5" r="2" fill="#cd6133"/><circle cx="11" cy="5" r="2" fill="#cd6133"/><rect x="4" y="6" width="8" height="7" fill="#de7d31" stroke="#2c3e50" stroke-width="1"/><circle cx="8" cy="9" r="1.5" fill="#ffffff"/></svg>`,
        slimePlush: `<svg viewBox="0 0 16 16"><path d="M2,10 Q2,5 8,5 Q14,5 14,10 Z" fill="#23c1ff" stroke="#2c3e50" stroke-width="1"/><circle cx="5" cy="8" r="1" fill="#2c3e50"/><circle cx="11" cy="8" r="1" fill="#2c3e50"/></svg>`,
        kittyPlush: `<svg viewBox="0 0 16 16"><path d="M3,5 L5,8 L7,5 Z M13,5 L11,8 L9,5 Z" fill="#7f8c8d"/><rect x="4" y="7" width="8" height="6" fill="#b2bec3" stroke="#2c3e50" stroke-width="1"/></svg>`
    }
};

// Generates structural listing categories into corresponding menu targets automatically
function buildStudioCatalog() {
    // Pull shared global local token counts
    document.getElementById('local-tokens').innerText = localStorage.getItem('hub_tokens') || 100;
    
    Object.keys(blueprints).forEach(catKey => {
        const targetNode = document.getElementById(`grid-${catKey}`);
        
        Object.keys(blueprints[catKey]).forEach(itemKey => {
            const block = document.createElement('div');
            block.className = 'thumb';
            block.innerHTML = blueprints[catKey][itemKey];
            
            // Interaction attachment
            block.onclick = () => spawnAsset(blueprints[catKey][itemKey]);
            targetNode.appendChild(block);
        });
    });
}

// Handles creation and drag/drop listeners for objects added to the workspace environment canvas
function spawnAsset(rawSVG) {
    const desk = document.getElementById('canvas');
    const envelope = document.createElement('div');
    envelope.classList.add('wrapper');
    
    // Assign base footprint metrics
    let trackingSize = 75; 
    envelope.style.setProperty('--w', `${trackingSize}px`);
    envelope.style.setProperty('--h', `${trackingSize}px`);
    
    // Spawn elements neatly in the safe workspace coordinates zone initially
    envelope.style.left = "50%"; 
    envelope.style.top = "45%";

    envelope.innerHTML = `
        <div class="scale-box">
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, 15)">+</button>
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, -15)">-</button>
        </div>
        ${rawSVG}
    `;

    // Interactive Drag Mechanics implementation tracking mouse moves
    let isDragging = false;
    envelope.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('scale-btn')) return; // Ignore click if adjusting scaling button
        isDragging = true;
        envelope.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const boundary = desk.getBoundingClientRect();
        let x = e.clientX - boundary.left;
        let y = e.clientY - boundary.top;
        
        // Lock objects within bounding coordinates safely
        if(x >= 0 && x <= boundary.width) envelope.style.left = `${x}px`;
        if(y >= 0 && y <= boundary.height) envelope.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Discard asset instantly upon registering a clean double click pattern
    envelope.addEventListener('dblclick', () => {
        envelope.remove();
    });

    desk.appendChild(envelope);
}

// Adjusts the width/height property variables on the wrapper container node element
function scaleFactor(btn, shift) {
    const innerWrap = btn.closest('.wrapper');
    let w = parseInt(innerWrap.style.getPropertyValue('--w')) || 75;
    let finalTarget = Math.max(40, Math.min(200, w + shift));
    
    innerWrap.style.setProperty('--w', `${finalTarget}px`);
    innerWrap.style.setProperty('--h', `${finalTarget}px`);
}

// Trigger configuration build path routine loop immediately at runtime initial startup
buildStudioCatalog();
