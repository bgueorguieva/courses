let numAsStrings = ['5', '2', '8', '28'];

// dvete sa ekvivalentni, no se spestyava cikul s map
let r1 = numAsStrings.map(x => Number(x));
let r2 = mapToNumber(numAsStrings);

console.log(r1, '\n', r2);

function mapToNumber(arr) {
    let result = [];

    for (let element of arr) {
        result.push(Number(element)); // vsqkakva funktsiya moje da e
    }
    return result;
}