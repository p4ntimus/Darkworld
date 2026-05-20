export function fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = "block";

    let o = 0;
    const timer = setInterval(() => {
        o += 0.05;
        el.style.opacity = o;
        if (o >= 1) clearInterval(timer);
    }, 20);
}

