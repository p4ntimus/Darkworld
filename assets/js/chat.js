import { api } from './api.js';

export function initChat() {
    const sendBtn = document.getElementById("sendBtn");
    const msgBox = document.getElementById("messages");

    if (!sendBtn) return;

    sendBtn.addEventListener("click", sendMessage);

    setInterval(loadMessages, 2000);
}

async function sendMessage() {
    const name = localStorage.getItem("dw_user");
    const text = document.getElementById("text").value.trim();

    if (!text) return;

    await api("send", { name, text });
    document.getElementById("text").value = "";
}

async function loadMessages() {
    const msgBox = document.getElementById("messages");
    const msgs = await api("messages");

    msgBox.innerHTML = "";

    msgs.forEach(m => {
        msgBox.innerHTML += `
            <div class="msg">
                <span class="name">${m.name}:</span> ${m.text}
            </div>
        `;
    });

    msgBox.scrollTop = msgBox.scrollHeight;
}

