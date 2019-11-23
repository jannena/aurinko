const keysdown = {};
window.onkeydown = window.onkeyup = e => {
    keysdown[e.code] = e.type === "keydown";
};

// Ratio[1]: speed
// Ratio[2]: orbit radius
// Ratio[3]: radius
// const ratio = [0.0001, 0.01, 1, 10 ** -4];
// const ratio = [0.0001, 0.013399999999999985, 1, 0.0025999999999999994];
const ratio = [0.0001, 0.0051, 1.9887999999999768, 0.0025999999999999994];
const moved = [0, 0];
let clear = true;
let halt = false;

const move = () => {
    if (keysdown["KeyW"]) moved[1]++;
    if (keysdown["KeyA"]) moved[0]++;
    if (keysdown["KeyS"]) moved[1]--;
    if (keysdown["KeyD"]) moved[0]--;

    if (keysdown["KeyU"]) ratio[1] += ratio[0];
    if (keysdown["KeyJ"]) ratio[1] = Math.max(ratio[1] - ratio[0], 0);
    if (keysdown["KeyI"]) ratio[2] += ratio[0];
    if (keysdown["KeyK"]) ratio[2] = Math.max(ratio[2] - ratio[0], 0);
    if (keysdown["KeyO"]) ratio[3] += ratio[0];
    if (keysdown["KeyL"]) ratio[3] = Math.max(ratio[3] - ratio[0], 0);


    if (keysdown["IntlBackslash"]) ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
};

window.addEventListener("keypress", ({ code }) => {
    console.log(code);
    if (keysdown["KeyZ"]) return (clear = !clear);
    if (keysdown["KeyQ"]) return (halt = !halt);
    const n = Number(code[5])
    if (!isNaN(n) && n > 0 && n < 7) ratio[0] = 10 ** -n;
});