// GLOBAL STATE BALANCES
let character = { hat: '', face: '', cloth: '' };
let currentHeldFood = '';
let currentIngredients = [];

// DYNAMIC ACCESSORY ATTACHMENT ROUTINES
function equipItem(type, emoji) {
    character[type] = emoji;
    const el = document.getElementById(`c-${type}`);
    if (el) el.innerText = emoji;
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
    
    const title = document.getElementById('room-title');
    const kBtn = document.getElementById('kitchen-teleport-btn');
    const dBtn = document.getElementById('dining-teleport-btn');

    if (roomID === 'creator-room') {
        if (title) title.innerText = "🏡 Avatar Designer"; 
        if (kBtn) kBtn.style.display = 'none'; 
        if (dBtn) dBtn.style.display = 'none';
    } else if (roomID === 'dining-room') {
        if (title) title.innerText = "🍽️ Diner Floor"; 
        if (kBtn) kBtn.style.display = 'block'; 
        if (dBtn) dBtn.style.display = 'none';
        
        // Serve food instantly upon teleport arrival
        if (currentHeldFood) {
            const plate = document.getElementById('plate-slot');
            if (plate) plate.innerText = currentHeldFood;
            setTimeout(() => {
                alert(`The client happily ate your newly invented ${currentHeldFood}! 🦊✨`);
                if (plate) plate.innerText = '🍽️';
                currentHeldFood = '';
            }, 1200);
        }
    } else if (roomID === 'kitchen-room') {
        if (title) title.innerText = "🍳 Preparation Kitchen"; 
        if (kBtn) kBtn.style.display = 'none'; 
        if (dBtn) dBtn.style.display = 'block';
    }
}

// FOOD INGREDIENT SYSTEM
function addIngredient(emoji) {
    if (currentIngredients.length >= 3) {
        alert("Your mixing bowl is completely full!");
        return;
    }
    currentIngredients.push(emoji);
    document.getElementById('bowl-display').innerText = currentIngredients.join(" + ");
}

function clearMixingBin() {
    currentIngredients = [];
    document.getElementById('bowl-display').innerText = "Empty Pot";
}

// COOKING COMBINATION CRAFTER
function craftCombinationItems() {
    if (currentIngredients.length === 0) {
        alert("Add items into the pot before crafting!");
        return;
    }
    
    // Sort items so order of selection doesn't break recipes
    let signature = currentIngredients.sort().join("");
    let resultDish = "🤢 Uncooked Slop";

    // Recipe Matching Logic
    if (signature === "🍞🥛") resultDish = "🥞 Fresh Hotcakes";
    else if (signature === "🍓🥛") resultDish = "🍨 Berry Soft Serve Cup";
    else if (signature === "🍞🥛🍓") resultDish = "🍰 Strawberry Shortcake";
    else if (signature === "🥩🍞") resultDish = "🍔 Gourmet Burger Combo";
    else if (signature === "🥩🍓") resultDish = "🍖 Glazed Sweet Ribs";

    currentHeldFood = resultDish;
    alert(`Combination Crafted Successfully: You created ${resultDish}! Return to the diner room to deliver it.`);
    clearMixingBin();
}
