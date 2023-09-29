function houseParty(guests) {
    let list = [];

    for (let line of guests) {
        let tokens = line.split(" ");
        // moje da se gleda po duljinata na token - 4 sa not going
        let name = tokens[0];
        if (tokens.length === 3) {
            let isInList = list.includes(name);
            if (isInList) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }
        } else {
            let indexOfPerson = list.indexOf(name);
            if (indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(list.join("\n")); // za da e na nov red
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);