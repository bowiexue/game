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
let lastX = 0;
let lastY = 0;

function resizeCanvas() {
    // Cache current drawing state to avoid loss on screen redraw sequences
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if(canvas.width > 0 && canvas.height > 0) tempCtx.drawImage(canvas, 0, 0);

    canvas.width = workspace.clientWidth;
    canvas.height = workspace.clientHeight;
    
    // Set premium continuous path rendering line properties
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Restore cached drawings onto newly padded canvas matrix boundaries
    ctx.drawImage(tempCanvas, 0, 0);
    updateBrush();
}
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function startPosition(e) {
    painting = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    
    lastX = currentX;
    lastY = currentY;
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', endPosition);

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
        // Destination-Over forces ink lines to sit perfectly BEHIND existing canvas text layers
        ctx.globalCompositeOperation = 'multiply';
        
        // Convert Hex to smooth alphablended RGB profile string arrays
        let r = parseInt(brushColor.slice(1,3), 16);
        let g = parseInt(brushColor.slice(3,5), 16);
        let b = parseInt(brushColor.slice(5,7), 16);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.35)`;
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = brushColor;
    }
}

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

trayItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.innerText);
    });
});

workspace.addEventListener('dragover', (e) => { e.preventDefault(); });

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
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingSticker) return;
        const rect = workspace.getBoundingClientRect();
        const x = e.clientX - rect.left - 15;
        const y = e.clientY - rect.top - 15;
        sticker.style.left = x + 'px';
        sticker.style.top = y + 'px';
    });

    window.addEventListener('mouseup', () => { isDraggingSticker = false; });
    sticker.addEventListener('dblclick', () => { sticker.remove(); });
    workspace.appendChild(sticker);
}
