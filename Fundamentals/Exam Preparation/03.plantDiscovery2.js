function plantDiscovery(input) {
    let n = Number(input.shift())
    let plants = {}

    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split("<->")
        let name = tokens[0]
        let rarity = Number(tokens[1])
        if (!plants[name]) {
            plants[name] = {
                rarity
            }
        } else { plants[name].rarity += rarity }
    }

    let command = input.shift()



    while (command != "Exhibition") {
        let tokens = command.split(": ")
        let action = tokens.shift()
        tokens = tokens.join("").split(" - ")
        let plantName = tokens[0]
        if (!plants.hasOwnProperty(plantName)) {
            console.log("error");
            command = input.shift()
            continue
        }

        if (action === "Rate") {
            let plant = tokens.shift()
            let rating = Number(tokens.shift())
            rate(plant, rating)
        } else if (action === "Update") {
            let plant = tokens.shift()
            let rarity = Number(tokens.shift())
            update(plant, rarity)
        } else if (action === "Reset") {
            let plant = tokens.shift()
            reset(plant)
        } else {
            console.log("error");
        }


        command = input.shift()
    }

    console.log(`Plants for the exhibition:`);

    let keys = Object.keys(plants)
    for (let key of keys) {
        let average = 0
        let length = 0
        for (let el of plants[key].rating) {
            length = plants[key].rating.length
            average += el
        }
        average /= length
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${average.toFixed(2)}`);
    }

    function rate(plant, rating) {
        if (!plants[plant].rating) {
            plants[plant].rating = []
        }
        plants[plant].rating.push(rating)
    }

    function update(plant, rarity) {
        plants[plant].rarity = rarity
    }

    function reset(plant) {
        delete plants[plant].rating
        plants[plant].rating = []
        plants[plant].rating.push(0)
    }

}