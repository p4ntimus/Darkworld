import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const uid = localStorage.getItem("uid");

async function loadPlayer() {
    const snap = await getDoc(doc(db, "players", uid));
    const p = snap.data();

    document.getElementById("hud").innerText =
        `${p.name} – Level ${p.level} – ${p.hp} HP – ${p.gold} Gold`;
}

loadPlayer();

function renderHUD(player) {
    const hud = document.getElementById("hud");

    hud.innerHTML = `
        <div class="player-info">
            ${player.name} – Level ${player.level}
        </div>

        <div class="hp-bar">
            <div class="hp-fill" style="width:${player.hp}%"></div>
        </div>

        <div class="gold">
            <img src="assets/img/gold.png">
            ${player.gold}
        </div>
    `;
}

renderHUD(playerData);
