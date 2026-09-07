// High fidelity hand-shaded retro blueprints mapped by custom width/height aspect ratios
const blueprints = {
    beds: {
        canopyFourPoster: {
            w: 160, h: 145,
            svg: `<svg viewBox="0 0 32 32"><path d="M2,2 H30 V30 H2 Z" fill="none"/><path d="M2,2 H30 V4 H26 V28 H24 V4 H8 V28 H6 V4 H2 Z" fill="#3d2314" stroke="#2c3e50" stroke-width="0.5"/><path d="M6,18 H26 V28 H6 Z" fill="#2980b9" stroke="#2c3e50" stroke-width="0.5"/><rect x="6" y="22" width="20" height="6" fill="#1b4f72"/><rect x="7" y="18" width="6" height="4" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><rect x="8" y="19" width="4" height="2" fill="#d5dbdb"/><path d="M13,18 H26 V20 H13 Z" fill="#5dade2"/></svg>`
        },
        pinkCottageBed: {
            w: 145, h: 100,
            svg: `<svg viewBox="0 0 32 20"><rect x="2" y="8" width="28" height="10" fill="#b33939" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="4" width="26" height="6" fill="#f48fb1" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="4" width="6" height="4" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><path d="M10,6 H29 V9 H10 Z" fill="#f8bbd0"/><rect x="2" y="16" width="2" height="3" fill="#2c3e50"/><rect x="28" y="16" width="2" height="3" fill="#2c3e50"/></svg>`
        }
    },
    seating: {
        tuftedChesterfield: {
            w: 165, h: 80,
            svg: `<svg viewBox="0 0 36 16"><path d="M1,2 H35 V15 H1 Z" fill="#800020" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="6" width="30" height="7" fill="#4a0011" stroke="#2c3e50" stroke-width="0.5"/><circle cx="6" cy="4" r="0.75" fill="#e67e22"/><circle cx="12" cy="4" r="0.75" fill="#e67e22"/><circle cx="18" cy="4" r="0.75" fill="#e67e22"/><circle cx="24" cy="4" r="0.75" fill="#e67e22"/><circle cx="30" cy="4" r="0.75" fill="#e67e22"/><rect x="2" y="13" width="2" height="2" fill="#2c3e50"/><rect x="32" y="13" width="2" height="2" fill="#2c3e50"/></svg>`
        }
    },
    tables: {
        executiveDesk: {
            w: 140, h: 85,
            svg: `<svg viewBox="0 0 28 16"><rect x="1" y="2" width="26" height="5" fill="#a0522d" stroke="#2c3e50" stroke-width="0.5"/><rect x="1" y="1" width="26" height="1" fill="#deb887"/><rect x="3" y="7" width="4" height="8" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><rect x="21" y="7" width="4" height="8" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><circle cx="5" cy="5" r="0.5" fill="#f1c40f"/><circle cx="23" cy="5" r="0.5" fill="#f1c40f"/></svg>`
        }
    },
    electronics: {
        monitorStation: {
            w: 100, h: 80,
            svg: `<svg viewBox="0 0 20 16"><rect x="2" y="2" width="16" height="10" fill="#1c1e22" stroke="#2c3e50" stroke-width="0.75"/><rect x="3" y="3" width="14" height="8" fill="#2b2e33"/><rect x="4" y="4" width="12" height="6" fill="#00d2d3" opacity="0.85"/><rect x="8" y="12" width="4" height="3" fill="#57606f"/><rect x="6" y="15" width="8" height="1" fill="#2c3e50"/></svg>`
        }
    },
    plants: {
        // OVERHAUL: Richer shading, precise dark outlines, and realistic proportions
        tieredBonsai: {
            w: 75, h: 85,
            svg: `<svg viewBox="0 0 16 18"><path d="M7,10 Q5,6 4,8 M8,12 Q12,9 10,8" fill="none" stroke="#4a3319" stroke-width="1.5" stroke-linecap="round"/><circle cx="4" cy="5" r="3" fill="#1e4620" stroke="#112412" stroke-width="0.5"/><circle cx="4" cy="4" r="1.5" fill="#27ae60"/><circle cx="11" cy="6" r="2.5" fill="#27ae60" stroke="#112412" stroke-width="0.5"/><circle cx="11" cy="5.5" r="1.2" fill="#2ecc71"/><rect x="2" y="13" width="12" height="3" fill="#a0522d" stroke="#2c3e50" stroke-width="1"/><rect x="3" y="14" width="10" height="1" fill="#d2691e"/></svg>`
        },
        pottedMonstera: {
            w: 70, h: 90,
            svg: `<svg viewBox="0 0 16 20"><path d="M4,8 Q2,4 4,2 M8,8 Q6,3 9,1 M12,8 Q14,4 12,2" fill="none" stroke="#1e4620" stroke-width="1.5"/><path d="M3,5 C1,7 3,11 5,9 C7,11 9,7 7,5" fill="#27ae60" stroke="#112412" stroke-width="0.5"/><path d="M11,5 C9,7 11,11 13,9 C15,11 16,7 14,5" fill="#2ecc71" stroke="#112412" stroke-width="0.5"/><rect x="4" y="12" width="8" height="6" fill="#ba7a54" stroke="#2c3e50" stroke-width="1"/><rect x="5" y="13" width="6" height="2" fill="#5c3a21" opacity="0.3"/></svg>`
        },
        cascadingIvy: {
            w: 65, h: 105,
            svg: `<svg viewBox="0 0 16 24"><line x1="8" y1="1" x2="8" y2="10" stroke="#2c3e50" stroke-width="1"/><rect x="5" y="8" width="6" height="4" fill="#d2691e" stroke="#2c3e50" stroke-width="0.75"/><path d="M4,12 Q2,18 4,22 M8,12 Q8,20 9,23 M12,12 Q14,18 12,21" fill="none" stroke="#27ae60" stroke-width="1.2"/><circle cx="4" cy="15" r="1.5" fill="#2ecc71"/><circle cx="9" cy="18" r="1.5" fill="#27ae60"/><circle cx="12" cy="16" r="1.5" fill="#2ecc71"/></svg>`
        }
    }
};

let globalZIndex = 100;

function buildStudioCatalog() {
    document.getElementById('local-tokens').innerText = localStorage.getItem('hub_tokens') || 100;
    
    Object.keys(blueprints).forEach(catKey => {
        const targetNode = document.getElementById(`grid-${catKey}`);
        
        Object.keys(blueprints[catKey]).forEach(itemKey => {
            const dataObj = blueprints[catKey][itemKey];
            const block = document.createElement('div');
            block.className = 'thumb';
            block.innerHTML = dataObj.svg;
            block.onclick = () => spawnAsset(dataObj.svg, dataObj.w, dataObj.h);
            targetNode.appendChild(block);
        });
    });
}

function spawnAsset(rawSVG, itemW, itemH) {
    const desk = document.getElementById('canvas');
    const envelope = document.createElement('div');
    envelope.classList.add('wrapper');
    
    // Bind exact layout definitions safely
    envelope.style.setProperty('--w', `${itemW}px`);
    envelope.style.setProperty('--h', `${itemH}px`);
    
    // Spawn neatly near the floor grid line
    envelope.style.left = "100px"; 
    envelope.style.top = "350px";
    
    globalZIndex++;
    envelope.style.zIndex = globalZIndex;

    envelope.innerHTML = `
        <div class="scale-box">
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, 15)">+</button>
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, -15)">-</button>
        </div>
        ${rawSVG}
    `;

    // FIX: Completely isolated drag metrics tracking individual properties
    let isDragging = false;
    let startX = 0, startY = 0;
    let origLeft = 0, origTop = 0;

    envelope.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('scale-btn')) return;
        isDragging = true;
        
        globalZIndex++;
        envelope.style.zIndex = globalZIndex;
        
        // Cache exact tracking points to block scaling distortions completely
        startX = e.clientX;
        startY = e.clientY;
        origLeft = parseInt(envelope.style.left) || 100;
        origTop = parseInt(envelope.style.top) || 350;
        
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const boundary = desk.getBoundingClientRect();
        
        // Calculate the difference from the initial click spot
        let deltaX = e.clientX - startX;
        let deltaY = e.clientY - startY;
        
        let newX = origLeft + deltaX;
        let newY = origTop + deltaY;
        
        // Lock inside margins comfortably
        if (newX >= 0 && newX <= boundary.width - itemW) envelope.style.left = `${newX}px`;
        if (newY >= 0 && newY <= boundary.height - itemH) envelope.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => { isDragging = false; });
    envelope.addEventListener('dblclick', () => envelope.remove());

    desk.appendChild(envelope);
}

function scaleFactor(btn, shift) {
    const innerWrap = btn.closest('.wrapper');
    let currentW = parseInt(innerWrap.style.getPropertyValue('--w'));
    let currentH = parseInt(innerWrap.style.getPropertyValue('--h'));
    
    let ratio = (currentW + shift) / currentW;
    let targetW = currentW + shift;
    let targetH = Math.round(currentH * ratio);
    
    if (targetW > 35 && targetW < 280) {
        innerWrap.style.setProperty('--w', `${targetW}px`);
        innerWrap.style.setProperty('--h', `${targetH}px`);
    }
}

buildStudioCatalog();
