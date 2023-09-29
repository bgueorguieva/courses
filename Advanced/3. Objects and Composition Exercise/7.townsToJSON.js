function solve(arr) {
    let result = [];

    class Town {
        constructor(name, latitude, longitude) {
            this.Town = name;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude); // po princip e losha praktika taka da se zadavat s glavna bukva, tova e izklyuchenie, zashtoto taka se iziskwa po uslovie
        }
    }

    for (let index = 1; index < arr.length; index++) { // preskachame purviq red s header na tabilcata
        let array = arr[index].split('|').map( t => t.trim()).filter(x => x.length != 0); // pravim nov spisuk & trimvame, za da mahnem praznite stringove
        // posledniq filter e, za da mahnem praznite stringove
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2);
        let longitude = Number(array[2]).toFixed(2);
        let town = new Town(townName, latitude, longitude); // new pri suzdavane na nov obekt ot nyakakuv klas
        result.push(town);
    }
    return JSON.stringify(result);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])