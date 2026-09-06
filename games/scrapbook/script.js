// High fidelity hand-shaded retro vector library with built-in asset scale metrics
const blueprints = {
    beds: {
        canopyBed: {
            size: 155,
            svg: `<svg viewBox="0 0 24 24"><path d="M2,4 H22 V22 H2 Z" fill="none"/><path d="M2,4 H22 V6 H20 V20 H18 V6 H6 V20 H4 V6 H2 Z" fill="#4a2810" stroke="#2c3e50" stroke-width="0.5"/><path d="M4,13 H20 V19 H4 Z" fill="#2980b9" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="16" width="16" height="3" fill="#1f618d"/><rect x="5" y="13" width="5" height="3" fill="#ffffff" stroke="#2c3e50" stroke-width="0.5"/><rect x="5" y="14" width="4" height="2" fill="#eaeded"/><path d="M10,13 H20 V14 H10 Z" fill="#5dade2"/></svg>`
        },
        pinkCottage: {
            size: 140,
            svg: `<svg viewBox="0 0 24 24"><path d="M2,8 H22 V20 H2 Z" fill="none"/><path d="M2,14 H22 V19 H2 Z" fill="#b33939" stroke="#2c3e50" stroke-width="0.5"/><rect x="3" y="10" width="18" height="5" fill="#f48fb1" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="10" width="5" height="3" fill="#ffffff"/><path d="M9,12 H21 V15 H9 Z" fill="#f8bbd0"/></svg>`
        }
    },
    seating: {
        tuftedSofa: {
            size: 135,
            svg: `<svg viewBox="0 0 24 24"><path d="M2,10 H22 V20 H2 Z" fill="none"/><path d="M2,10 H22 V17 H2 Z" fill="#b83b5e" stroke="#2c3e50" stroke-width="0.5"/><rect x="4" y="13" width="16" height="4" fill="#6a2c70" stroke="#2c3e50" stroke-width="0.5"/><circle cx="6" cy="11.5" r="0.75" fill="#f08a5d"/><circle cx="12" cy="11.5" r="0.75" fill="#f08a5d"/><circle cx="18" cy="11.5" r="0.75" fill="#f08a5d"/><rect x="2" y="17" width="2" height="2" fill="#2c3e50"/><rect x="20" y="17" width="2" height="2" fill="#2c3e50"/></svg>`
        },
        wingbackChair: {
            size: 85,
            svg: `<svg viewBox="0 0 16 16"><path d="M2,4 H14 V14 H2 Z" fill="none"/><path d="M3,4 H13 V12 H3 Z" fill="#2c3e50" stroke="#111" stroke-width="0.5"/><rect x="4" y="6" width="8" height="6" fill="#1e3799"/><rect x="5" y="8" width="6" height="4" fill="#4a69bd"/><rect x="3" y="12" width="2" height="2" fill="#111"/><rect x="11" y="12" width="2" height="2" fill="#111"/></svg>`
        }
    },
    tables: {
        carvedDesk: {
            size: 115,
            svg: `<svg viewBox="0 0 24 24"><path d="M2,6 H22 V20 H2 Z" fill="none"/><path d="M2,8 H22 V11 H2 Z" fill="#845131" stroke="#2c3e50" stroke-width="0.5"/><rect x="2" y="7" width="20" height="2" fill="#a0522d"/><rect x="4" y="11" width="3" height="7" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><rect x="17" y="11" width="3" height="7" fill="#5c3a21" stroke="#2c3e50" stroke-width="0.5"/><circle cx="6" cy="10" r="0.75" fill="#f1c40f"/><circle cx="18" cy="10" r="0.75" fill="#f1c40f"/></svg>`
        },
        coffeeTable: {
            size: 95,
            svg: `<svg viewBox="0 0 16 16"><path d="M1,7 H15 V13 H1 Z" fill="none"/><rect x="1" y="8" width="14" height="2" fill="#ba7a54" stroke="#2c3e50" stroke-width="0.5"/><rect x="1" y="7" width="14" height="1" fill="#df9f77"/><rect x="2" y="10" width="2" height="3" fill="#5c3a21"/><rect x="12" y="10" width="2" height="3" fill="#5c3a21"/></svg>`
        }
    },
    electronics: {
        workstation: {
            size: 100,
            svg: `<svg viewBox="0 0 24 24"><path d="M2,4 H22 V20 H2 Z" fill="none"/><rect x="5" y="6" width="14" height="9" fill="#1c1e22" stroke="#2c3e50" stroke-width="0.75"/><rect x="6" y="7" width="12" height="7" fill="#2b2e33"/><rect x="7" y="8" width="10" height="5" fill="#00d2d3" opacity="0.8"/><rect x="10" y="15" width="4" height="3" fill="#57606f"/><rect x="8" y="18" width="8" height="1" fill="#2c3e50"/></svg>`
        },
        vintageGramophone: {
            size: 65,
            svg: `<svg viewBox="0 0 16 16"><path d="M2,2 H14 V14 H2 Z" fill="none"/><rect x="4" y="9" width="8" height="5" fill="#845131" stroke="#2c3e50" stroke-width="0.5"/><path d="M6,9 Q6,4 11,3 Q12,5 9,7 Z" fill="#f1c40f" stroke="#2c3e50" stroke-width="0.5"/><circle cx="10" cy="4" r="1" fill="#fff" opacity="0.6"/></svg>`
        }
    },
    plants: {
        tieredBonsai: {
            size: 60,
            svg: `<svg viewBox="0 0 16 16"><path d="M1,1 H15 V15 H1 Z" fill="none"/><path d="M8,6 Q6,4 5,5 M8,9 Q11,7 10,6" stroke="#5c3a21" stroke-width="1.5" stroke-linecap="round"/><circle cx="4" cy="4" r="2.5" fill="#1b4d3e" stroke="#112412" stroke-width="0.5"/><circle cx="11" cy="5" r="2" fill="#27ae60" stroke="#112412" stroke-width="0.5"/><rect x="3" y="11" width="10" height="3" fill="#b5651d" stroke="#2c3e50" stroke-width="1"/><rect x="4" y="12" width="8" height="1" fill="#d2b48c"/></svg>`
        },
        monsteraJar: {
            size: 55,
            svg: `<svg viewBox="0 0 16 16"><path d="M3,2 Q5,5 3,8 M8,1 Q9,4 8,8 M13,2 Q11,5 13,8" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-linecap="round"/><rect x="5" y="9" width="6" height="5" fill="#a5d6a7" opacity="0.6" stroke="#2c3e50" stroke-width="0.75"/><line x1="5" y1="11" x2="11" y2="11" stroke="#fff" opacity="0.5"/></svg>`
        }
    },
    plush: {
        royalBear: {
            size: 55,
            svg: `<svg viewBox="0 0 16 16"><path d="M3,3 H13 V13 H3 Z" fill="none"/><circle cx="4" cy="5" r="2" fill="#b33939"/><circle cx="12" cy="5" r="2" fill="#b33939"/><rect x="4" y="6" width="8" height="7" fill="#d63031" stroke="#2c3e50" stroke-width="0.75"/><rect x="6" y="4" width="4" height="2" fill="#f1c40f"/><circle cx="8" cy="9" r="1.5" fill="#ffffff"/></svg>`
        },
        bubbleSlime: {
            size: 45,
            svg: `<svg viewBox="0 0 16 16"><path d="M2,10 Q2,4 8,4 Q14,4 14,10 Z" fill="#00d2d3" stroke="#2c3e50" stroke-width="0.75"/><circle cx="6" cy="7.5" r="1" fill="#fff"/><circle cx="5" cy="9" r="0.75" fill="#2c3e50"/><circle cx="11" cy="9" r="0.75" fill="#2c3e50"/></svg>`
        }
    }
};

function buildStudioCatalog() {
    document.getElementById('local-tokens').innerText = localStorage.getItem('hub_tokens') || 100;
    
    Object.keys(blueprints).forEach(catKey => {
        const targetNode = document.getElementById(`grid-${catKey}`);
        
        Object.keys(blueprints[catKey]).forEach(itemKey => {
            const itemData = blueprints[catKey][itemKey];
            const block = document.createElement('div');
            block.className = 'thumb';
            block.innerHTML = itemData.svg;
            
            // Passes both the art and its realistic base scale bound
            block.onclick = () => spawnAsset(itemData.svg, itemData.size);
            targetNode.appendChild(block);
        });
    });
}

function spawnAsset(rawSVG, baseSize) {
    const desk = document.getElementById('canvas');
    const envelope = document.createElement('div');
    envelope.classList.add('wrapper');
    
    // NEW MECHANIC: Automatically maps properties directly to realistic dimensions instantly
    envelope.style.setProperty('--w', `${baseSize}px`);
    envelope.style.setProperty('--h', `${baseSize}px`);
    
    envelope.style.left = "50%"; 
    envelope.style.top = "45%";

    // Injects standard custom controls overlay tracking data sizes
    envelope.innerHTML = `
        <div class="scale-box">
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, 15, ${baseSize})">+</button>
            <button class="scale-btn" onclick="event.stopPropagation(); scaleFactor(this, -15, ${baseSize})">-</button>
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
        let x = e.clientX - boundary.left;
        let y = e.clientY - boundary.top;
        
        if(x >= 0 && x <= boundary.width) envelope.style.left = `${x}px`;
        if(y >= 0 && y <= boundary.height) envelope.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => isDragging = false);
    envelope.addEventListener('dblclick', () => envelope.remove());

    desk.appendChild(envelope);
}

function scaleFactor(btn, shift, defaultBase) {
    const innerWrap = btn.closest('.wrapper');
    let currentW = parseInt(innerWrap.style.getPropertyValue('--w')) || defaultBase;
    
    // Bounds check to keep adjustments relative to item profiles
    let finalTarget = Math.max(defaultBase - 45, Math.min(defaultBase + 75, currentW + shift));
    
    innerWrap.style.setProperty('--w', `${finalTarget}px`);
    innerWrap.style.setProperty('--h', `${finalTarget}px`);
}

buildStudioCatalog();
