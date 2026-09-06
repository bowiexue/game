document.addEventListener('DOMContentLoaded', () => {
    // LAYOUT ELEMENTS REFS
    const roomTitle = document.getElementById('room-title');
    const kitchenTeleportBtn = document.getElementById('kitchen-teleport-btn');
    const diningTeleportBtn = document.getElementById('dining-teleport-btn');
    const mapBtn = document.getElementById('map-btn');
    const doneBtn = document.getElementById('done-btn');
    
    const plateSlot = document.getElementById('plate-slot');
    const ovenStatus = document.getElementById('oven-status');
    const ovenDisplay = document.getElementById('oven-display');

    // AVATAR REFS
    let character = { hat: '', face: '', cloth: '' };
    let currentHeldFood = '';

    // MAP ESCAPE BUTTON
    mapBtn.addEventListener('click', () => {
        location.href = '../../index.html';
    });

    // CLOSET CLICKS LOGIC ENGINE
    function setupGridListeners(gridId, type) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        grid.addEventListener('click', (e) => {
            const node = e.target.closest('.item-node');
            if (!node) return;
            
            let emoji = node.getAttribute('data-emoji');
            character[type] = emoji;
            
            const targetPreview = document.getElementById(`c-${type}`);
            if (targetPreview) targetPreview.innerText = emoji;
        });
    }

    setupGridListeners('hat-grid', 'hat');
    setupGridListeners('face-grid', 'face');
    setupGridListeners('cloth-grid', 'cloth');

    // LOCKS CHARACTER IN PROFILE CLOSURES
    doneBtn.addEventListener('click', () => {
        document.getElementById('d-hat').innerText = character.hat;
        document.getElementById('d-face').innerText = character.face;
        document.getElementById('d-cloth').innerText = character.cloth;
        teleport('dining-room');
    });

    // TELEPORT MECHANICS CONTROLLER ROUTINES
    function teleport(roomID) {
        document.querySelectorAll('.screen-view').forEach(view => view.classList.remove('active'));
        const activeRoom = document.getElementById(roomID);
        if (activeRoom) activeRoom.classList.add('active');
        
        if (roomID === 'creator-room') {
            roomTitle.innerText = "🏡 Avatar Designer";
            kitchenTeleportBtn.style.display = 'none';
            diningTeleportBtn.style.display = 'none';
        } 
        else if (roomID === 'dining-room') {
            roomTitle.innerText = "🍽️ Diner Floor";
            kitchenTeleportBtn.style.display = 'block';
            diningTeleportBtn.style.display = 'none';
            
            // Deliver cooked items straight to custom clients
            if (currentHeldFood) {
                if (plateSlot) plateSlot.innerText = currentHeldFood;
                setTimeout(() => {
                    alert("The guest ate the delicious food you brought from the kitchen! 🦊✨");
                    if (plateSlot) plateSlot.innerText = '🍽️';
                    currentHeldFood = '';
                }, 1200);
            }
        } 
        else if (roomID === 'kitchen-room') {
            roomTitle.innerText = "🍳 Preparation Kitchen";
            kitchenTeleportBtn.style.display = 'none';
            diningTeleportBtn.style.display = 'block';
        }
    }

    // TELEPORT ROUTE ACTIONS BUTTONS
    kitchenTeleportBtn.addEventListener('click', () => teleport('kitchen-room'));
    diningTeleportBtn.addEventListener('click', () => teleport('dining-room'));

    // KITCHEN COOK OVEN ENGINE
    const recipeGrid = document.getElementById('recipe-grid');
    if (recipeGrid) {
        recipeGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.recipe-btn');
            if (!btn) return;
            
            let foodItem = btn.getAttribute('data-food');
            if (ovenStatus) ovenStatus.innerText = "Baking treats... ⏱️";
            if (ovenDisplay) ovenDisplay.innerText = '🔥';
            
            setTimeout(() => {
                currentHeldFood = foodItem;
                if (ovenStatus) ovenStatus.innerText = "Finished! Click 'Return to Diner' to serve!";
                if (ovenDisplay) ovenDisplay.innerText = foodItem;
            }, 1500);
        });
    }
});
