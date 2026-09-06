
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capybara Onsen Spa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="back-btn" onclick="location.href='../../index.html'">← Return to Studio Hub</button>
    
    <header>
        <h1>♨️ Capybara Onsen Spa</h1>
        <p>Customize your spa host profile and tap the steaming water to invite cozy bathhouse guests!</p>
    </header>

    <div class="game-container">
        <!-- Sidebar Customizer Panel -->
        <aside class="panel">
            <h2>Avatar Customizer</h2>
            <div class="avatar-preview" id="avatar-char">🧑‍✈️</div>
            
            <div class="customizer-group">
                <label for="role-select">Select Manager Species</label>
                <select id="role-select">
                    <option value="🐕">Shiba Inu</option>
                    <option value="🐱">Calico Cat</option>
                    <option value="🧑‍✈️">Human Attendant</option>
                    <option value="🐰">Bunny Host</option>
                </select>
            </div>

            <div class="customizer-group">
                <label for="accessory-select">Equip Head Accessory</label>
                <select id="accessory-select">
                    <option value="">None</option>
                    <option value="👑">Royal Crown</option>
                    <option value="🎀">Cozy Ribbon</option>
                    <option value="🎩">Top Hat</option>
                    <option value="🌸">Cherry Blossom</option>
                </select>
            </div>
            
            <p style="font-size: 0.8rem; color: #7f8c8d; margin-top: 10px;">💡 Tip: Right-click any animal in the pool to release them back into nature!</p>
        </aside>

        <!-- Main Onsen Hot Springs Bath Layout Map Area -->
        <main class="onsen-area">
            <div class="pool-wrapper">
                <div class="water-pool" id="water-pool">
                    <div class="steam-overlay"></div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>
