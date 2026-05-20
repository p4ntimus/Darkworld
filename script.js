const API = "https://darkworld.infinityfreeapp.com/server.php";

let username = "";

function login() {
    username = document.getElementById("name").value.trim();

    if (username === "") return;

    let form = new FormData();
    form.append("name", username);

    // Erst versuchen wir Login
    fetch(API + "?action=login", {
        method: "POST",
        body: form
    })
    .then(r => r.json())
    .then(data => {
        if (data.error) {
            // Wenn User nicht existiert → registrieren
            register();
        } else {
            startChat();
        }
    });
}

function register() {
    let form = new FormData();
    form.append("name", username);

    fetch(API + "?action=register", {
        method: "POST",
        body: form
    })
    .then(r => r.json())
    .then(() => startChat());
}

function startChat() {
    document.getElementById("login").style.display = "none";
    document.getElementById("chat").style.display = "block";

    loadMessages();
    setInterval(loadMessages, 2000);
}

function sendMessage() {
    let text = document.getElementById("text").value.trim();
    if (text === "") return;

    let form = new FormData();
    form.append("name", username);
    form.append("text", text);

    fetch(API + "?action=send", {
        method: "POST",
        body: form
    });

    document.getElementById("text").value = "";
}

function loadMessages() {
    fetch(API + "?action=messages")
        .then(r => r.json())
        .then(msgs => {
            let box = document.getElementById("messages");
            box.innerHTML = "";

            msgs.forEach(m => {
                box.innerHTML += `
                    <div class="msg">
                        <span class="name">${m.name}:</span> ${m.text}
                    </div>
                `;
            });

            box.scrollTop = box.scrollHeight;
        });
}

