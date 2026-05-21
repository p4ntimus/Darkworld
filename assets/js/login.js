import { auth, db } from "./firebase.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("username");

    loginBtn.addEventListener("click", async () => {
        const username = usernameInput.value.trim();

        if (!username) {
            alert("Bitte gib einen Namen ein.");
            return;
        }

        // Firebase Login (anonym)
        const userCred = await signInAnonymously(auth);
        const uid = userCred.user.uid;

        // Prüfen ob Spieler schon existiert
        const playerRef = doc(db, "players", uid);
        const playerSnap = await getDoc(playerRef);

        if (!playerSnap.exists()) {
            // Neuer Spieler → anlegen
            await setDoc(playerRef, {
                name: username,
                level: 1,
                hp: 100,
                gold: 0,
                created: Date.now()
            });
        }

        // Lokale Speicherung
        localStorage.setItem("uid", uid);
        localStorage.setItem("username", username);

        // Weiter ins Spiel
        window.location.href = "world.html";
    });
});
