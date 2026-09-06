const workspace = document.getElementById('workspace');
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

const penBtn = document.getElementById('tool-pen');
const highlighterBtn = document.getElementById('tool-highlighter');
const colorInput = document.getElementById('brush-color');
const sizeSelect = document.getElementById('brush-size');
const templateSelect = document.getElementById('template-select');
const clearBtn = document.getElementById('clear-btn');
const trayItems = document.querySelectorAll('.tray-item');

let painting = false;
let activeTool = 'pen';
let brushColor = '#6c5ce7';
let brushSize = 8;

// Adjust drawing sheet coordinate sizing scales 
function resizeCanvas() {
    canvas.width = workspace.clientWidth;
    canvas.height = workspace.clientHeight;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    updateBrush();
}
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// Interaction mechanics loop triggers
function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', endPosition);

// Core tool states & canvas blending mode handlers
function setTool(tool) {
    activeTool = tool;
    penBtn.classList.remove('active');
    highlighterBtn.classList.remove('active');
    
    if(tool === 'pen') penBtn.classList.add('active');
    if(tool === 'highlighter') highlighterBtn.classList.add('active');
    updateBrush();
}

function updateBrush() {
    brushColor = colorInput.value;
    brushSize = parseInt(sizeSelect.value);
    
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    
    if (activeTool === 'highlighter') {
        ctx.globalAlpha = 0.4;
    } else {
        ctx.globalAlpha = 1.0;
    }
}

// UI Event Listeners 
penBtn.addEventListener('click', () => setTool('pen'));
highlighterBtn.addEventListener('click', () => setTool('highlighter'));
colorInput.addEventListener('change', updateBrush);
sizeSelect.addEventListener('change', updateBrush);

templateSelect.addEventListener('change', (e) => {
    workspace.className = 'workspace ' + e.target.value;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelectorAll('.placed-sticker').forEach(el => el.remove());
});

// Sticker drag-and-drop orchestration layers
trayItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.innerText);
    });
});

workspace.addEventListener('dragover', (e) => {
    e.preventDefault();
});

workspace.addEventListener('drop', (e) => {
    e.preventDefault();
    const emoji = e.dataTransfer.getData("text");
    const rect = workspace.getBoundingClientRect();
    const x = e.clientX - rect.left - 15;
    const y = e.clientY - rect.top - 15;

    createSticker(emoji, x, y);
});

function createSticker(emoji, left, top) {
    const sticker = document.createElement('div');
    sticker.className = 'placed-sticker';
    sticker.innerText = emoji;
    sticker.style.left = left + 'px';
    sticker.style.top = top + 'px';

    let isDraggingSticker = false;
    
    sticker.addEventListener('mousedown', (e) => {
        isDraggingSticker = true;
        e.stopPropagation(); // Stops painting strokes while placing decorative layers
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingSticker) return;
        const rect = workspace.getBoundingClientRect();
        const x = e.clientX - rect.left - 15;
        const y = e.clientY - rect.top - 15;
        sticker.style.left = x + 'px';
        sticker.style.top = y + 'px';
    });

    window.addEventListener('mouseup', () => {
        isDraggingSticker = false;
    });

    // Double clicking an image element triggers an localized delete sequence
    sticker.addEventListener('dblclick', () => {
        sticker.remove();
    });

    workspace.appendChild(sticker);
}
