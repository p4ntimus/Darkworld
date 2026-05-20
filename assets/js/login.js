import { api } from './api.js';

export function initLogin() {
    const loginBox = document.getElementById("login");
    const chatBox = document.getElementById("chat");
    const btn = document.getElementById("loginBtn");

    if (!btn) return;

    btn.addEventListener("click", async () => {
        const name = document.getElementById("name").value.trim();
        if (!name) return;

        let result = await api("login", { name });

        if (result.error) {
            await api("register", { name });
        }

        loginBox.style.display = "none";
        chatBox.style.display = "block";

        localStorage.setItem("dw_user", name);
    });
}

