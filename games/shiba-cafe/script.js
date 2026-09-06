// GLOBAL STATE BALANCES
let character = { hat: '', face: '', cloth: '' };
let currentHeldFood = '';

// DYNAMIC ACCESORY ATTACHMENT ROUTINES
function equipItem(type, emoji) {
    character[type] = emoji;
    const targetElement = document.getElementById(`c-${type}`);
    if (targetElement) {
        targetElement.innerText = emoji;
    }
}

// LOCKS CHARACTER IN PROFILE ENGINE
function saveAvatarAndStart() {
    const dHat = document.getElementById('d-hat');
    const dFace = document.getElementById('d-face');
    const dCloth = document.getElementById('d-cloth');
    
    if (dHat) dHat.innerText = character.hat;
    if (dFace) dFace.innerText = character.face;
    if (dCloth) dCloth.innerText = character.cloth;
    
    teleport('dining-room');
}

// ROOM TELEPORTATION NAVIGATION SWITCHES
function teleport(roomID) {
    // Hide all viewports completely
    document.querySelectorAll('.screen-view').forEach(view => view.classList.remove('active'));
    
    // Show chosen room map layer
    const activeRoom = document.getElementById(roomID);
    if (activeRoom) activeRoom.classList.add('active');
    
    const roomTitle = document.getElementById('room-title');
    const kitchenBtn = document.getElementById('kitchen-teleport-btn');
    const diningBtn = document.getElementById('dining-teleport-btn');

    if (roomID === 'creator-room') {
        if (roomTitle) roomTitle.innerText = "🏡 Avatar Designer";
        if (kitchenBtn) kitchenBtn.style.display = 'none';
        if (diningBtn) diningBtn.style.display = 'none';
    } 
    else if (roomID === 'dining-room') {
        if (roomTitle) roomTitle.innerText = "🍽️ Diner Floor";
        if (kitchenBtn) kitchenBtn.style.display = 'block';
        if (diningBtn) diningBtn.style.display = 'none';
        
        // Serve food instantly upon teleport arrival
        if (currentHeldFood) {
            const plateSlot = document.getElementById('plate-slot');
            if (plateSlot) plateSlot.innerText = currentHeldFood;
            
            setTimeout(() => {
                alert("The guest ate the delicious food you brought from the kitchen! 🦊✨");
                if (plateSlot) plateSlot.innerText = '🍽️';
                currentHeldFood = '';
            }, 1200);
        }
    } 
    else if (roomID === 'kitchen-room') {
        if (roomTitle) roomTitle.innerText = "🍳 Preparation Kitchen";
        if (kitchenBtn) kitchenBtn.style.display = 'none';
        if (diningBtn) diningBtn.style.display = 'block';
    }
}

// KITCHEN MICROWAVE OVEN TICKERS
function startBake(foodItem) {
    const ovenStatus = document.getElementById('oven-status');
    const ovenDisplay = document.getElementById('oven-display');

    if (ovenStatus) ovenStatus.innerText = "Baking treats... ⏱️";
    if (ovenDisplay) ovenDisplay.innerText = '🔥';
    
    setTimeout(() => {
        currentHeldFood = foodItem;
        if (ovenStatus) ovenStatus.innerText = "Finished! Click 'Return to Diner' to serve!";
        if (ovenDisplay) ovenDisplay.innerText = foodItem;
    }, 1500);
}
