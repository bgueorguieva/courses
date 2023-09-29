function cityInfo(city) {
    let props = Object.keys(city);

    for (let prop of props) { // konvetsiya da se slaga edinstveno chislo, ako promenlivata e mnojestveno
        console.log(`${prop} -> ${city[prop]}`); // city[prop] = arr[1] primero
    }
}

// OR
function cityInfo(city) {

    for (let prop of Object.keys(city)) { // konvetsiya da se slaga edinstveno chislo, ako promenlivata e mnojestveno
        console.log(`${prop} -> ${city[prop]}`); // city[prop] = arr[1] primero
    }
}

cityInfo({ // podavame direkto literala vuv funktsiyata
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});