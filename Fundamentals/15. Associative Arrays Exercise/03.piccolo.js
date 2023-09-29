function piccolo(input) {
    // create storage collection
    let parking = new Set(); // nova instantsiya, klas

    //for every line of input
    for (let line of input) {
        // - parse line with split
        let [command, number] = line.split(', ');
        // - if command is IN, car enters parking (store in collection)
        if (command == "IN") {
            parking.add(number);
        } else {
            // - else, car exits parking (remove from collection)
            parking.delete(number);
        }
    }
    if (parking.size == 0) { // ako nyama koli
        console.log('Parking Lot is Empty');
    }
    // convert collection to array & sort by name
    let result = Array.from(parking).sort(); // suzdava masiv ot podadenoto vutre neshto

    for (let car of result) {
        console.log(car);
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);