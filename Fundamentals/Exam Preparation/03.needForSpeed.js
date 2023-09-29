function solve(input) {
    let carsCount = Number(input.shift());
    let cars = {};

    //add cars in collection
    for (let i = 0; i < carsCount; i++) {
        // - create car
        let carData = input.shift().split('|');
        let name = carData.shift();
        let [mileage, fuel] = carData.map(Number);
        cars[name] = {
            mileage,
            fuel,
        };
    }
    // repeat for remaining input until Stop
    while (input[0] !== 'Stop') {
        let tokens = input.shift().split(' : ');
        let [command, name] = tokens;

        let car = cars[name];

        if (command === 'Drive') {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            let maxMileage = 100000;

            if (fuel > car.fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                car.mileage += distance;
                car.fuel -= fuel;
                console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (car.mileage >= maxMileage) {
                delete cars[name];
                console.log(`Time to sell the ${name}!`);
            }
        } else if (command === 'Refuel') {
            let fuel = Number(tokens[2]);
            let maxFuel = 75;
            let tempFuel = car.fuel + fuel;
            if (tempFuel > maxFuel) {
                let refueled = Math.abs(maxFuel - car.fuel);
                car.fuel += refueled;
                console.log(`${name} refueled with ${refueled} liters`);
            } else {
                car.fuel += fuel;
                console.log(`${name} refueled with ${fuel} liters`);
            }
        } else if (command === 'Revert') {
            let kilometerts = Number(tokens[2]);
            let minMileage = 10000;
            if (car.mileage > minMileage) {
                car.mileage -= kilometerts;
                console.log(`${name} mileage decreased by ${kilometerts} kilometers`);
            } else {
                car.mileage = minMileage;
            }
        }
    }
    //print all cars
    for (let carData of Object.entries(cars)) {
        let car = carData[0];
        let carInfo = carData[1];
        console.log(`${car} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`);
    }
}
/*solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);*/
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);