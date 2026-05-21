import { auth, db } from "./firebase.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    if (!username) return alert("Bitte Namen eingeben!");

    const userCred = await signInAnonymously(auth);
    const uid = userCred.user.uid;

    await setDoc(doc(db, "players", uid), {
        name: username,
        level: 1,
        hp: 100,
        gold: 0,
        created: Date.now()
    });

    localStorage.setItem("uid", uid);
    localStorage.setItem("username", username);

    window.location.href = "world.html";
});
