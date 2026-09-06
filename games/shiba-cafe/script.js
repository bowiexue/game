let character = { hat: '', face: '', cloth: '' };
let currentHeldFood = '';

function equipItem(type, emoji) {
    character[type] = emoji;
    const el = document.getElementById(`c-${type}`);
    if (el) el.innerText = emoji;
}

function saveAvatarAndStart() {
    document.getElementById('d-hat').innerText = character.hat;
    document.getElementById('d-face').innerText = character.face;
    document.getElementById('d-cloth').innerText = character.cloth;
    teleport('dining-room');
}

function teleport(roomID) {
    document.querySelectorAll('.screen-view').forEach(view => view.classList.remove('active'));
    document.getElementById(roomID).classList.add('active');
    
    const title = document.getElementById('room-title');
    const kBtn = document.getElementById('kitchen-teleport-btn');
    const dBtn = document.getElementById('dining-teleport-btn');

    if (roomID === 'creator-room') {
        title.innerText = "🏡 Avatar Designer"; kBtn.style.display = 'none'; dBtn.style.display = 'none';
    } else if (roomID === 'dining-room') {
        title.innerText = "🍽️ Diner Floor"; kBtn.style.display = 'block'; dBtn.style.display = 'none';
        if (currentHeldFood) {
            const plate = document.getElementById('plate-slot');
            if (plate) plate.innerText = currentHeldFood;
            setTimeout(() => {
                alert(`The client happily munched down your handmade ${currentHeldFood}! 🦊✨`);
                if (plate) plate.innerText = '🍽️';
                currentHeldFood = '';
            }, 1200);
        }
    } else if (roomID === 'kitchen-room') {
        title.innerText = "🍳 Preparation Kitchen"; kBtn.style.display = 'none'; dBtn.style.display = 'block';
    }
}

function prepareFood(foodItem, machine) {
    const status = document.getElementById('kitchen-status');
    const display = document.getElementById('kitchen-display');
    
    if (machine === 'oven') {
        status.innerText = "Baking item inside heating elements... 🔥"; display.innerText = '⏳';
    } else {
        status.innerText = "Churning sub-zero ice crystals... ❄️"; display.innerText = '🌀';
    }
    
    setTimeout(() => {
        currentHeldFood = foodItem;
        status.innerText = "Order finished! Click 'Return to Diner' to deliver it!";
        display.innerText = foodItem;
    }, 1400);
}
