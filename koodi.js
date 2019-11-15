
/**
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById("playground");
/**
 * @type CanvasRenderingContext2D
 */
const ctx = canvas.getContext("2d");

// ctx.translate(canvas.width / 2, canvas.height / 2);

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

const things = [
    {
        color: "yellow",
        radius: 50,
        speed: 0,
        satellites: [
            {
                color: "blue",
                radius: 25,
                orbitRadius: 100,
                speed: 0.01,
                angle: 0,
                satellites: [
                    {
                        center: true,
                        color: "grey",
                        radius: 5,
                        orbitRadius: 40,
                        speed: 0.12,
                        angle: 0,
                        satellites: []
                    }
                ]
            },
            {
                color: "orange",
                radius: 35,
                orbitRadius: 200,
                speed: 0.05,
                angle: 0,
                satellites: []
            }
        ]
    }
];

const drawCircles = (circles = things, mx = 0, my = 0) => {
    circles.forEach(circle => {
        drawCircle(mx, my, circle.radius, circle.color);
        circle.satellites.forEach(satellite => {
            satellite.angle += satellite.speed;
            const [x, y] = [
                mx + satellite.orbitRadius * Math.cos(satellite.angle),
                my + satellite.orbitRadius * Math.sin(satellite.angle)
            ];
            if (satellite.center) {
                const oldAngle = satellite.angle - satellite.speed;
                const [oX, oY] = [
                    mx + satellite.orbitRadius * Math.cos(oldAngle),
                    my + satellite.orbitRadius * Math.sin(oldAngle)
                ];
                rotationMove = [oX - x, oY - y];
            }
            // drawCircle(x, y, satellite.radius, satellite.color);
            drawCircles([satellite], x, y);
        });
    });
};

let rotationOfCenter = 0.01;
let rotationMove = [];

// ctx.save();

const play = () => {
    window.requestAnimationFrame(() => {
        // ctx.restore();
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        // ctx.clearRect(-10000, -1000, 10000, 10000);
        // fillStyle = "white";
        // ctx.fillRect(-10000, -10000, 10000, 10000);

        drawCircles();
        // ctx.rotate(rotationOfCenter);
        // ctx.translate(rotationMove[0], rotationMove[1]);
        // ctx.setTransform(1, 1, 1, 1, 5, 0);

        play();
    });
};

play();