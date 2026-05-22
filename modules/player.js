
// Player-Daten (lokal im Spiel)
export const player = {
    name: "",
    level: 1,
    xp: 0,
    xpNeeded: 100,
    hp: 100,
    maxHp: 100,
    gold: 0
};

// XP hinzufügen
export function addXP(amount) {
    player.xp += amount;

    if (player.xp >= player.xpNeeded) {
        levelUp();
    }
}

// Level-Up Logik
export function levelUp() {
    player.xp -= player.xpNeeded;
    player.level++;

    // XP-Kurve
    player.xpNeeded = Math.floor(player.xpNeeded * 1.25);

    // HP erhöhen
    player.maxHp += 10;
    player.hp = player.maxHp;
}

// Gold hinzufügen
export function addGold(amount) {
    player.gold += amount;
}

// Schaden nehmen
export function takeDamage(amount) {
    player.hp -= amount;
    if (player.hp < 0) player.hp = 0;
}

// Heilen
export function heal(amount) {
    player.hp += amount;
    if (player.hp > player.maxHp) player.hp = player.maxHp;
}
