function solve(input) {
    let plantsCount = Number(input.shift());
    let plants = {};

    //add plans in ezhibition
    for (let i = 0; i < plantsCount; i++) {
        // - create new plant
        let plantData = input.shift().split('<->');
        let plantName = plantData[0];
        let rarity = Number(plantData[1]);
        if (!plants[plantName]) {
            plants[plantName] = {
                rarity,
            }
        } else {
            plants[plantName].rarity += rarity
        };
        plants[plantName].rating = 0;
        plants[plantName].ratingCounter = 0;
    }


    while (input[0] != 'Exhibition') {
        let line = input.shift().split(":");
        let command = line.shift();
        let info = line.shift().split(' - ');
        let plantName = info[0].trim();
        let token2 = +info[1];

        if (!plants.hasOwnProperty(plantName)) {
            console.log("error");
            line = input.shift();
            continue
        }

        let plant = plants[plantName];

        if (command === 'Rate') {
            plant.rating += Number(token2);
            plant.ratingCounter++;

        } else if (command == 'Update') {
            plant.rarity = token2;
        } else if (command == 'Reset') {
            plant.rating = 0;
        }
    }

    console.log("Plants for the exhibition:");
    for (let plantData of Object.entries(plants)) {
        let name = plantData[0];
        let data = plantData[1];
        let averageRating = Number(data.rating) / Number(data.ratingCounter);
        for (let el of Object.keys(averageRating)) {
            average += el;
        }
        console.log(`- ${name}; Rarity: ${Number(data.rarity)}; Rating: ${averageRating.toFixed(2)}`);
    }

}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
solve((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]));