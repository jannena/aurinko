const things = {
    color: "yellow",
    radius: 50, // 50
    speed: 0,
    satellites: [
        {
            color: "blue",
            radius: 25, // 25
            orbitRadius: 150,
            speed: 0.2,
            satellites: [
                {
                    color: "grey",
                    radius: 5, // 5
                    orbitRadius: 75,
                    speed: 1,
                    satellites: [
                        {
                            color: "grey",
                            radius: 0,
                            orbitRadius: 20,
                            speed: 0.7,
                            satellites: [
                                {
                                    // center: true,
                                    color: "grey",
                                    radius: 0,
                                    orbitRadius: 20,
                                    speed: 0.5,
                                    satellites: []
                                }
                            ]
                        },
                        {
                            // center: true,
                            color: "black",
                            radius: 5,
                            orbitRadius: 30,
                            speed: 0.1,
                            satellites: []
                        }
                    ]
                }
            ]
        },
        {
            color: "orange",
            radius: 0, // 35
            orbitRadius: 350,
            speed: 0.05,
            satellites: [
                {
                    color: "blue",
                    radius: 0, // 25
                    orbitRadius: 150,
                    speed: 0.2,
                    satellites: [
                        {
                            color: "grey",
                            radius: 0, // 5
                            orbitRadius: 75,
                            speed: 1,
                            satellites: [
                                {
                                    color: "grey",
                                    radius: 0,
                                    orbitRadius: 20,
                                    speed: 0.7,
                                    satellites: [
                                        {
                                            // center: true,
                                            color: "grey",
                                            radius: 0,
                                            orbitRadius: 20,
                                            speed: 0.5,
                                            satellites: []
                                        }
                                    ]
                                },
                                {
                                    // center: true,
                                    color: "red",
                                    radius: 5,
                                    orbitRadius: 30,
                                    speed: 0.1,
                                    satellites: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};