// High fidelity hand-shaded retro blueprints mapped by custom width/height aspect ratios
const blueprints = {
    beds: {
        canopyFourPoster: {
            w: 160, h: 145, // Large vertical statement piece
            svg: `<svg viewBox="0 0 32 32"><path d="M2,2 H30 V30 H2 Z" fill="none"/><path d="M2,2 H30 V4 H26 V28 H24 V4 H8 V28 H6 V4 H2 Z" fill="#3d2314" stroke="#2c3e50" stroke-width="0.5"/><path d="M6,18 H26 V28 H6 Z" fill="#2980b9" stroke="#2c3e50" stroke-width="0.5"/><rect x="6" y="22" width="20" height="6" fill="#1b4f72"/><rect x="7" y="18" width="6" height="4" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><rect x="8" y="19" width="4" height="2" fill="#d5dbdb"/><path d="M13,18 H26 V20 H13 Z" fill="#5dade2"/></svg>`
        },
        pinkCottageBed: {
            w: 145, h: 100, // Wide and low to the ground
            svg: `<svg viewBox="0 0 32 20"><rect x="2" y="8" width="28" height="10" fill="#b33939" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="4" width="26" height="6" fill="#f48fb1" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="4" width="6" height="4" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><path d="M10,6 H29 V9 H10 Z" fill="#f8bbd0"/><rect x="2" y="16" width="2" height="3" fill="#2c3e50"/><rect x="28" y="16" width="2" height="3" fill="#2c3e50"/></svg>`
        }
    },
    seating: {
        tuftedChesterfield: {
            w: 165, h: 80, // Extra wide layout parameters
            svg: `<svg viewBox="0 0 36 16"><path d="M1,2 H35 V15 H1 Z" fill="#800020" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="6" width="30" height="7" fill="#4a0011" stroke="#2c3e50" stroke-width="0.5"/><circle cx="6" cy="4" r="0.75" fill="#e67e22"/><circle cx="12" cy="4" r="0.75" fill="#e67e22"/><circle cx="18" cy="4" r="0.75" fill="#e67e22"/><circle cx="24" cy="4" r="0.75" fill="#e67e22"/><circle cx="30" cy="4" r="0.75" fill="#e67e22"/><rect x="2" y="13" width="2" height="2" fill="#2c3e50"/><rect x="32" y="13" width="2" height="2" fill="#2c3e50"/></svg>`
        },
        wingbackChair: {
            w: 80, h: 90, // Square sitting profile
            svg: `<svg viewBox="0 0 16 18"><rect x="2" y="2" width="12" height="13" fill="#1b3a4b" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="5" width="10" height="7" fill="#2e6f40" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="7" width="8" height="5" fill="#52b788"/><rect x="2" y="15" width="2" height="2" fill="#2c3e50"/><rect x="12" y="15" width="2" height="2" fill="#2c3e50"/></svg>`
        }
    },
    tables: {
        executiveDesk: {
            w: 140, h: 85, // Long flat study layout
            svg: `<svg viewBox="0 0 28 16"><rect x="1" y="2" width="26" height="5" fill="#a0522d" stroke="#2c3e50" stroke-width="0.5"/><rect x="1" y="1" width="26" height="1" fill="#deb887"/><rect x="3" y="7" width="4" height="8" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><rect x="21" y="7" width="4" height="8" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><circle cx="5" cy="5" r="0.5" fill="#f1c40f"/><circle cx="23" cy="5" r="0.5" fill="#f1c40f"/></svg>`
        },
        lowCoffeeTable: {
            w: 110, h: 45, // Slim horizontal lowboy style
            svg: `<svg viewBox="0 0 24 10"><rect x="1" y="2" width="22" height="3" fill="#ba7a54" stroke="#2c3e50" stroke-width="0.5"/><rect x="1" y="1" width="22" height="1" fill="#df9f77"/><rect x="3" y="5" width="2" height="4" fill="#5c3a21"/><rect x="19" y="5" width="2" height="4" fill="#5c3a21"/></svg>`
        }
    },
    electronics: {
        monitorStation: {
            w: 95, h: 80,
            svg: `<svg viewBox="0 0 20 16"><rect x="2" y="2" width="16" height="10" fill="#1c1e22" stroke="#2c3e50" stroke-width="0.75"/><rect x="3" y="3" width="14" height="8" fill="#2b2e33"/><rect x="4" y="4" width="12" height="6" fill="#00d2d3" opacity="0.85"/><rect x="8" y="12" width="4" height="3" fill="#57606f"/><rect x="6" y="15" width="8" height="1" fill="#2c3e50"/></svg>`
        },
        gramophone: {
            w: 60, h: 70, // Intentionally compact profile
            svg: `<svg viewBox="0 0 12 14"><rect x="2" y="8" width="8" height="5" fill="#845131" stroke="#2c3e50" stroke-width="0.5"/><path d="M4,8 Q4,3 9,2 Q10,4 7,6 Z" fill="#f1c40f" stroke="#2c3e50" stroke-width="0.5"/><circle cx="8" cy="3" r="0.5" fill="#fff" opacity="0.7"/></svg>`
        }
    },
    plants: {
        pottedBonsai: {
            w: 65, h: 75,
            svg: `<svg viewBox="0 0 12 14"><path d="M6,6 Q4,3 3,4 M6,9 Q9,6 8,5" stroke="#5c3a21" stroke-width="1.5" stroke-linecap="round"/><circle cx="3" cy="3" r="2" fill="#1b4d3e" stroke="#112412" stroke-width="0.5"/><circle cx="9" cy="4" r="1.5" fill="#27ae60" stroke="#112412" stroke-width="0.5"/><rect x="2" y="10" width="8" height="3" fill="#b5651d" stroke="#2c3e50" stroke-width="1"/><rect x="3" y="11" width="6" height="1" fill="#d2b48c"/></svg>`
        },
        hangingFern: {
            w: 55, h: 85, // Tall vertical string accents
            svg: `<svg viewBox="0 0 10 16"><line x1="5" y1="1" x2="5" y2="8" stroke="#2c3e50"/><circle cx="5" cy="9" r="2.5" fill="#27ae60" stroke="#2c3e50" stroke-width="0.5"/><path d="M3,11 Q1,15 2,16 M7,11 Q9,15 8,16" fill="none" stroke="#2ecc71" stroke-width="1"/></svg>`
        }
    },
    plush: {
        teddyBear: {
            w: 50, h: 55, // Extra small detail accent dimensions
            svg: `<svg viewBox="0 0 12 12"><circle cx="3" cy="4" r="1.5" fill="#cd6133"/><circle cx="9" cy="4" r="1.5" fill="#cd6133"/><rect x="2" y="5" width="8" height="6" fill="#de7d31" stroke="#2c3e50" stroke-width="0.75"/><circle cx="6" cy="8" r="1" fill="#ffffff"/></svg>`
        }
    }
};

function buildStudioCatalog() {
    document.getElementById('local-tokens').innerText = localStorage.getItem('hub_tokens') || 100;
    
    Object.keys(blueprints).forEach(catKey => {
        const targetNode = document.getElementById(`grid-${catKey}`);
        
        Object.keys(blueprints[catKey]).forEach(itemKey => {
            const dataObj = blueprints[catKey][itemKey];
            const block = document.createElement('div');
            block.className = 'thumb';
            block.innerHTML = dataObj.svg;
            
            // NEW FIXED LOGIC: Passes raw widths and heights down to the workspace script
            block.onclick = () => spawnAsset(dataObj.svg, dataObj.w, dataObj.h);
            targetNode.appendChild(block);
        });
    });
}

function spawnAsset(rawSVG, itemW, itemH) {
    const desk = document.getElementById('canvas');
    const envelope = document.createElement('div');
    envelope.classList.add('wrapper');
    
    // Binds the exact target aspect coordinates directly to the template shell layout variables
    envelope.style.setProperty('--w', `${itemW}px`);
    envelope.style.setProperty('--h', `${itemH}px`);
    
    // Automatically aligns objects cleanly near the floor grid line instead of forcing random floating paths
    envelope.style.left = "45%"; 
    envelope.style.top = "60%";

    envelope.innerHTML = `
        <div class="scale-box">
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, 15, -1)">+</button>
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, -15, -1)">-</button>
        </div>
        ${rawSVG}
    `;

    let isDragging = false;
    envelope.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('scale-btn')) return;
        isDragging = true;
        envelope.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const boundary = desk.getBoundingClientRect();
        
        // Offset tracking alignments to smooth movement
        let x = e.clientX - boundary.left - (itemW / 2);
        let y = e.clientY - boundary.top - (itemH / 2);
        
        if(x >= 0 && x <= boundary.width - itemW) envelope.style.left = `${x}px`;
        if(y >= 0 && y <= boundary.height - itemH) envelope.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => isDragging = false);
    envelope.addEventListener('dblclick', () => envelope.remove());

    desk.appendChild(envelope);
}

// Uniformly increments both dimensions to prevent square stretching distortion patterns
function scaleFactor(btn, shift) {
    const innerWrap = btn.closest('.wrapper');
    let currentW = parseInt(innerWrap.style.getPropertyValue('--w'));
    let currentH = parseInt(innerWrap.style.getPropertyValue('--h'));
    
    // Formulates aspect ratio modifier step calculations safely
    let scalingFactor = (currentW + shift) / currentW;
    
    let targetW = currentW + shift;
    let targetH = Math.round(currentH * scalingFactor);
    
    if(targetW > 35 && targetW < 250) {
        innerWrap.style.setProperty('--w', `${targetW}px`);
        innerWrap.style.setProperty('--h', `${targetH}px`);
    }
}

buildStudioCatalog();
