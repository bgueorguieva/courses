function address(input) {
    let result = {};

    // for every line in input
    for (let line of input) {
        // - parse line
        let [name, address] = line.split(':');

        // - store data
        result[name] = address;

    }
    // /!\ sort result
    let sorted = Object.entries(result); // sortiraneto ne afektira originalniya obekt, prevrushtame obekta v masiv
    sorted.sort((a, b) => a[0].localeCompare(b[0])); // vinagi poluchava po 2 elementa, koito vadim
    //let nameA = a[0];
    //let nameB = b[0];

    //return 0; // za da raboti korektno kato struktura funktsiyata, no ne pravi nishto

    for (let [name, address] of sorted) {
        console.log(name, '->', address);
    }

}
address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);


//OR

function address(input) {
    let result = {};

    // for every line in input
    for (let line of input) {
        // - parse line
        let [name, address] = line.split(':');

        // - store data
        result[name] = address;

    }
    // /!\ sort result
    let sortedKeys = Object.keys(result); // sortiraneto ne afektira originalniya obekt, prevrushtame obekta v masiv
    sortedKeys.sort((a, b) => a.localeCompare(b));
    for (let name of sortedKeys) {
        console.log(name, '->', result[name]);
    }

}
address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);