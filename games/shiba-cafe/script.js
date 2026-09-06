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
    document.getElementById('d-hat').innerText = character.hat;
    document.getElementById('d-face').innerText = character.face;
    document.getElementById('d-cloth').innerText = character.cloth;
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
        roomTitle.innerText = "🏡 Avatar Designer";
        kitchenBtn.style.display = 'none';
        diningBtn.style.display = 'none';
    } 
    else if (roomID === 'dining-room') {
        roomTitle.innerText = "🍽️ Diner Floor";
        kitchenBtn.style.display = 'block';
        diningBtn.style.display = 'none';
        
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
        roomTitle.innerText = "🍳 Preparation Kitchen";
        kitchenBtn.style.display = 'none';
        diningBtn.style.display = 'block';
    }
}

// KITCHEN MICROWAVE OVEN TICKERS
function startBake(foodItem) {
    document.getElementById('oven-status').innerText = "Baking treats... ⏱️";
    document.getElementById('oven-display').innerText = '🔥';
    
    setTimeout(() => {
        currentHeldFood = foodItem;
        document.getElementById('oven-status').innerText = "Finished! Click 'Return to Diner' to serve!";
        document.getElementById('oven-display').innerText = foodItem;
    }, 1500);
}
