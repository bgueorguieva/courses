function meetings(input) {
    //create collection
    let result = {};
    // for every entry of input
    for (let line of input) { // of za masivi, in za obekti
        // -- parse
        let [day, name] = line.split(' '); // destrukturirane
        // -- store only if day is available
        if (result.hasOwnProperty(day)) { // sushtestvuva li veche takova svoistvo
            console.log(`Conflict on ${day}!`);
        } else {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in result) {
        console.log(day, '->', result[day]);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log('-----');
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);