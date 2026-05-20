const API = "https://darkworld.infinityfreeapp.com/server.php";

export async function api(action, data = {}) {
    const form = new FormData();
    for (const key in data) form.append(key, data[key]);

    const res = await fetch(`${API}?action=${action}`, {
        method: "POST",
        body: form
    });

    return res.json();
}

