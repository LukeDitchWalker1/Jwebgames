// Character stats and inventory
var character = {
    name: "Hero",
    level: 1,
    hp: 100,
    maxHp: 100,
    strength: 10,
    defense: 5,
    gold: 0,
    inventory: ["Potion x5", "Antidote x3", "Mana Elixir x2"]
};

// Enemy stats
var enemy = {
    name: "Goblin",
    hp: Math.floor(Math.random() * 50) + 50,
    maxHp: 100,
    strength: Math.floor(Math.random() * 5) + 5,
    defense: Math.floor(Math.random() * 3) + 2,
    gold: Math.floor(Math.random() * 10) + 5
};

// Update character stats in the HTML
function updateCharacter() {
    document.getElementById("charName").innerHTML = character.name;
    document.getElementById("charLevel").innerHTML = character.level;
    document.getElementById("charHP").innerHTML = character.hp;
    document.getElementById("charStrength").innerHTML = character.strength;
    document.getElementById("charDefense").innerHTML = character.defense;
    document.getElementById("charGold").innerHTML = character.gold;
    var inventoryList = document.getElementById("charInventory");
    inventoryList.innerHTML = "";
    for (var i = 0; i < character.inventory.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(character.inventory[i]));
        inventoryList.appendChild(li);
    }
}

// Update enemy stats in the HTML
function updateEnemy() {
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyHP").innerHTML = enemy.hp;
    document.getElementById("enemyStrength").innerHTML = enemy.strength;
    document.getElementById("enemyDefense").innerHTML = enemy.defense;
    document.getElementById("enemyGold").innerHTML = enemy.gold;
}

// Attack function
function attack() {
    var damage = Math.max(character.strength - enemy.defense, 1);
    enemy.hp -= damage;
    updateEnemy();
    if (enemy.hp <= 0) {
        document.getElementById("battleResult").innerHTML = "You defeated the " + enemy.name + " and gained " + enemy.gold + " gold!";
        character.gold += enemy.gold;
        enemy.hp = enemy.maxHp;
        enemy.strength = Math.floor(Math.random() * 5) + 5;
        enemy.defense = Math.floor(Math.random() * 3) + 2;
        enemy.gold = Math.floor(Math.random() * 10) + 5;
        updateEnemy();
        updateCharacter();
    } else {
        damage = Math.max(enemy.strength - character.defense, 1);
        character.hp -= damage;
        updateCharacter();
        if (character.hp <= 0) {
            document.getElementById("battleResult").innerHTML = "You were defeated by the " + enemy.name + "!";
        }
    }
}
