// GLOBAL RUNTIME STORAGE
let character = { hat: '', face: '', cloth: '' };
let currentHeldFood = '';
let currentIngredients = [];

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('room-title');
    const kBtn = document.getElementById('kitchen-teleport-btn');
    const dBtn = document.getElementById('dining-teleport-btn');
    
    // Map Button Navigation Hook
    document.getElementById('btn-map-nav').addEventListener('click', () => {
        location.href = '../../index.html';
    });

    // Wardrobe closet dynamic node configurations
    setupClosetGroup('closet-hats', 'hat');
    setupClosetGroup('closet-glasses', 'face');
    setupClosetGroup('closet-clothes', 'cloth');

    function setupClosetGroup(gridId, type) {
        const targetGrid = document.getElementById(gridId);
        if (!targetGrid) return;
        
        targetGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.item-node');
            if (!item) return;
            
            let emoji = item.getAttribute('data-emoji');
            character[type] = emoji;
            
            const previewEl = document.getElementById(`c-${type}`);
            if (previewEl) previewEl.innerText = emoji;
        });
    }

    // Lock Wardrobe selections into Diner profile slots
    document.getElementById('btn-avatar-done').addEventListener('click', () => {
        document.getElementById('d-hat').innerText = character.hat;
        document.getElementById('d-face').innerText = character.face;
        document.getElementById('d-cloth').innerText = character.cloth;
        teleport('dining-room');
    });

    // Teleport Area Layout Controller
    window.teleport = function(roomID) {
        document.querySelectorAll('.screen-view').forEach(view => view.classList.remove('active'));
        document.getElementById(roomID).classList.add('active');

        if (roomID === 'creator-room') {
            title.innerText = "🏡 Avatar Designer"; kBtn.style.display = 'none'; dBtn.style.display = 'none';
        } else if (roomID === 'dining-room') {
            title.innerText = "🍽️ Diner Floor"; kBtn.style.display = 'block'; dBtn.style.display = 'none';
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
            title.innerText = "🍳 Preparation Kitchen"; kBtn.style.display = 'none'; dBtn.style.display = 'block';
        }
    }

    // Hook teleport controls
    kBtn.addEventListener('click', () => teleport('kitchen-room'));
    dBtn.addEventListener('click', () => teleport('dining-room'));

    // Pantry shelf selection collection loops
    const pantry = document.getElementById('pantry-ingredients');
    if (pantry) {
        pantry.addEventListener('click', (e) => {
            const btn = e.target.closest('.ingredient-btn');
            if (!btn) return;
            
            if (currentIngredients.length >= 3) {
                alert("Your mixing bowl is completely full!");
                return;
            }
            let emoji = btn.getAttribute('data-ing');
            currentIngredients.push(emoji);
            document.getElementById('bowl-display').innerText = currentIngredients.join(" + ");
        });
    }

    // Flush mixing bowl contents completely
    document.getElementById('btn-clear-pot').addEventListener('click', () => {
        currentIngredients = [];
        document.getElementById('bowl-display').innerText = "Empty Pot";
    });

    // Recipe crafting matrix algorithm evaluations
    document.getElementById('btn-craft-dish').addEventListener('click', () => {
        if (currentIngredients.length === 0) {
            alert("Add items into the pot before crafting!");
            return;
        }
        
        let signature = currentIngredients.sort().join("");
        let resultDish = "🤢 Uncooked Slop";

        if (signature === "🍞🥛") resultDish = "🥞 Fresh Hotcakes";
        else if (signature === "🥛🍓") resultDish = "🍨 Berry Soft Serve Cup";
        else if (signature === "🍞🥛🍓") resultDish = "🍰 Strawberry Shortcake";
        else if (signature === "🍞🥩") resultDish = "🍔 Gourmet Burger Combo";
        else if (signature === "🍓🥩") resultDish = "🍖 Glazed Sweet Ribs";

        currentHeldFood = resultDish;
        alert(`Combination Crafted Successfully: You created ${resultDish}! Return to the diner room to deliver it.`);
        currentIngredients = [];
        document.getElementById('bowl-display').innerText = "Empty Pot";
    });
});
