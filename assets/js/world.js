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
