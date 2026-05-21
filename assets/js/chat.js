import { rtdb } from "./firebase.js";
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const chatRef = ref(rtdb, "chat");

export function sendMessage(user, text) {
    push(chatRef, {
        user,
        text,
        time: Date.now()
    });
}

export function listenChat(callback) {
    onChildAdded(chatRef, (snap) => callback(snap.val()));
}
