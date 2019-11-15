const things = {
    color: "yellow",
    radius: 50, // 50
    speed: 0,
    satellites: [
        {
            color: "blue",
            radius: 25, // 25
            orbitRadius: 150,
            speed: 0.01,
            satellites: [
                {
                    color: "grey",
                    radius: 5, // 5
                    orbitRadius: 75,
                    speed: 0.12,
                    satellites: [
                        {
                            color: "grey",
                            radius: 2,
                            orbitRadius: 20,
                            speed: 0.5,
                            satellites: []
                        }
                    ]
                }
            ]
        },
        {
            // center: true,
            color: "orange",
            radius: 35,
            orbitRadius: 350,
            speed: 0.05,
            satellites: []
        }
    ]
};