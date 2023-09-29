function solve(input) {
    let stops = input.shift();

    while (input[0] !== 'Travel') {
        let line = input.shift().split(':');
        let command = line[0];
        let token1 = line[1];
        let token2 = line[2];

        if (command === "Add Stop") {
            token1 = Number(token1);
            if (token1 >= 0 && token1 < stops.length) {
                let start = stops.substring(0, token1);
                let end = stops.substring(token1);
                stops = start + token2 + end;
            }
            console.log(stops);
        } else if (command === 'Remove Stop') {
            token1 = Number(token1);
            token2 = Number(token2);
            if ((token1 >= 0 && token1 < stops.length) && (token2 >= 0 && token2 < stops.length)) {
                let stopToRemove = stops.slice(token1, token2 + 1);
                stops = stops.replace(stopToRemove, '');
            }
            console.log(stops);
        } else if (command === 'Switch') {
            if (stops.includes(token1)) {
                stops = stops.replace(token1, token2);
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:-1:33",
    "Switch:Tokyo:Bulgaria",
    "Travel"
]);

/*solve(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch: Albania: Azərbaycan',
    'Travel',
]);*/