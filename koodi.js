
/**
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById("playground");
/**
 * @type CanvasRenderingContext2D
 */
const ctx = canvas.getContext("2d");

// ctx.translate(canvas.width / 2, canvas.height / 2);

const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
window.addEventListener("resize", setCanvasSize);
setCanvasSize();

const cX = x => canvas.width / 2 + x;
const cY = y => canvas.height / 2 + y;

const drawCircle = (x, y, radius, color, fill = true) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(cX(x), cY(y), radius, 0, 2 * Math.PI);
    ctx.stroke();
    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    }
};

const drawCircles = (circle = data, mx = 0, my = 0, frame, center) => {
    drawCircle(mx - center[0] + moved[0], my - center[1] + moved[1], circle.radius * ratio[3], circle.color);
    circle.satellites.forEach(satellite => {
        // satellite.angle += satellite.speed;
        const [x, y] = [
            mx + satellite.orbitRadius * ratio[2] * Math.cos(satellite.speed * frame),
            my + satellite.orbitRadius * ratio[2] * Math.sin(satellite.speed * frame)
        ];
        drawCircles(satellite, x, y, frame, center);
    });
};

// Coordinates of the center satellite
const getCenter = () => {
    let ready = [];
    const getCircles = (circle = thing, mx = 0, my = 0) => {
        for (let i = 0; i < circle.satellites.length; i++) {
            const satellite = circle.satellites[i];
            const [x, y] = [
                mx + satellite.orbitRadius * ratio[2] * Math.cos(satellite.speed * frame),
                my + satellite.orbitRadius * ratio[2] * Math.sin(satellite.speed * frame)
            ];
            if (satellite.center) ready = [x, y];
            getCircles(satellite, x, y);
        }
    };
    getCircles(things);
    return ready.length !== 0 ? ready : [0, 0];
};

let frame = 0;

const play = () => {
    window.requestAnimationFrame(() => {
        if (halt) return play();
        if (clear) ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        move();

        center = getCenter() || [0, 0];

        drawCircles(things, 0, 0, frame, getCenter() || [0, 0]);

        frame += 1 * ratio[1];
        play();
    });
};

play();;