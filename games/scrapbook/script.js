// Wrap initialization in a DOM check so it never crashes
document.addEventListener('DOMContentLoaded', () => {
    const workspace = document.getElementById('workspace');
    const canvas = document.getElementById('paintCanvas');
    if (!canvas || !workspace) return;
    
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
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if(canvas.width > 0 && canvas.height > 0) tempCtx.drawImage(canvas, 0, 0);

        canvas.width = workspace.clientWidth;
        canvas.height = workspace.clientHeight;
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.drawImage(tempCanvas, 0, 0);
        updateBrush();
    }
    
    resizeCanvas();
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

    function updateBrush() {
        if(colorInput) brushColor = colorInput.value;
        if(sizeSelect) brushSize = parseInt(sizeSelect.value);
        
        ctx.lineWidth = brushSize;
        
        if (activeTool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            let r = parseInt(brushColor.slice(1,3), 16);
            let g = parseInt(brushColor.slice(3,5), 16);
            let b = parseInt(brushColor.slice(5,7), 16);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.30)`; // Continuous smooth gel texture
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = brushColor;
        }
    }

    if(penBtn) penBtn.addEventListener('click', () => { activeTool = 'pen'; penBtn.classList.add('active'); highlighterBtn?.classList.remove('active'); updateBrush(); });
    if(highlighterBtn) highlighterBtn.addEventListener('click', () => { activeTool = 'highlighter'; highlighterBtn.classList.add('active'); penBtn?.classList.remove('active'); updateBrush(); });
    if(colorInput) colorInput.addEventListener('change', updateBrush);
    if(sizeSelect) sizeSelect.addEventListener('change', updateBrush);
    if(templateSelect) templateSelect.addEventListener('change', (e) => workspace.className = 'workspace ' + e.target.value);
    
    if(clearBtn) clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.querySelectorAll('.placed-sticker').forEach(el => el.remove());
    });

    trayItems.forEach(item => {
        item.addEventListener('dragstart', (e) => e.dataTransfer.setData("text", e.target.innerText));
    });

    workspace.addEventListener('dragover', (e) => e.preventDefault());
    workspace.addEventListener('drop', (e) => {
        e.preventDefault();
        const emoji = e.dataTransfer.setData ? e.dataTransfer.getData("text") : '';
        const rect = workspace.getBoundingClientRect();
        createSticker(emoji, e.clientX - rect.left - 20, e.clientY - rect.top - 20);
    });

    function createSticker(emoji, left, top) {
        if(!emoji) return;
        const sticker = document.createElement('div');
        sticker.className = 'placed-sticker';
        sticker.innerText = emoji;
        sticker.style.left = left + 'px';
        sticker.style.top = top + 'px';

        let isDraggingSticker = false;
        sticker.addEventListener('mousedown', (e) => { isDraggingSticker = true; e.stopPropagation(); });
        window.addEventListener('mousemove', (e) => {
            if (!isDraggingSticker) return;
            const rect = workspace.getBoundingClientRect();
            sticker.style.left = (e.clientX - rect.left - 20) + 'px';
            sticker.style.top = (e.clientY - rect.top - 20) + 'px';
        });
        window.addEventListener('mouseup', () => isDraggingSticker = false);
        sticker.addEventListener('dblclick', () => sticker.remove());
        workspace.appendChild(sticker);
    }
});
