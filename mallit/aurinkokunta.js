
// Nopeus
const k1 = x => 1 / x;

// Keskietäisyys Auringosta
const k2 = x => x;

// Säde
const k3 = x => x;


const template = {
    name: "Aurinko",
    color: "yellow",
    radius: k3(10000),
    speed: 0,
    orbitRadius: 0,
    satellites: [
        {
            name: "Merkurius",
            color: "gray",
            radius: k3(2440),
            speed: k1(0.2408),
            orbitRadius: k2(57.9),
            satellites: []
        },
        {
            name: "Venus",
            color: "gray",
            radius: k3(6052),
            speed: k1(0.6152),
            orbitRadius: k2(108.2),
            satellites: []
        },
        {
            name: "Maa",
            color: "blue",
            radius: k3(6371),
            speed: k1(1),
            orbitRadius: k2(149.6),
            satellites: [
                /* {
                    name: "Kuu",
                    color: "grey",
                    radius: k3(1738.2),
                    speed: k1(1.023),
                    orbitRadius: k2(0.3844),
                    satellites: []
                } */
            ]
        },
        {
            name: "Mars",
            color: "#e77d11",
            radius: k3(3390),
            speed: k1(1.8808),
            orbitRadius: k2(227.9),
            satellites: []
        },
        {
            name: "Jupiter",
            color: "orange",
            radius: k3(69911),
            speed: k1(13.06),
            orbitRadius: k2(778.3),
            satellites: []
        },
        {
            name: "Saturnus",
            color: "#C5AB6E",
            radius: k3(58232),
            speed: k1(9.64),
            orbitRadius: k2(1426.7),
            satellites: []
        },
        {
            name: "Uranus",
            color: "turquoise",
            radius: k3(25362),
            speed: k1(6.8),
            orbitRadius: k2(2870.7),
            satellites: []
        },
        {
            name: "Neptunus",
            color: "turquoise",
            radius: k3(24622),
            speed: k1(5.43),
            orbitRadius: k2(4496.4),
            satellites: []
        },
    ]
};


let things = template;

window.addEventListener("keypress", ({ code }) => {
    if (code === "Backquote") things.satellites[2].center = !things.satellites[2].center;
});