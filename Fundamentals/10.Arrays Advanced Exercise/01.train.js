function train(train) {
    let newTrainWithPassengers = train.shift().split(" ").map(Number); // izvikva se purviq indeks, koito e masiv i go vrushta v string purvo, i mahame purviq indeks
    // s dovavyane na spit se vrushta nov masiv ot stringove, s map gi pravim chisla

    let maxCapacity = Number(train.shift());

    for (let command of train) {
        let currentCommand = command.split(' '); // razdelyame stoinostite, za da poluchavame dumite "Add"
        if (currentCommand[0] === 'Add') {
            newTrainWithPassengers.push(Number(currentCommand[1]));
        } else {
            for (let i = 0; i < newTrainWithPassengers.length; i++) {
                if (newTrainWithPassengers[i] + Number(currentCommand[0]) <= maxCapacity) {
                    passengersInWagons[i] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(newTrainWithPassengers.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);