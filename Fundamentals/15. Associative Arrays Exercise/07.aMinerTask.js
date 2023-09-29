function solve(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let qty = Number(arr[i + 1]);

        if (!resources.hasOwnProperty(name)) {
            resources[name] = qty;
        } else {
            resources[name] += qty;
        }
    }
    for (let [name, qty] of Object.entries(resources)) {
        console.log(`${name} -> ${qty}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);