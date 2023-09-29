let myAssocArr = {
    alpha: 1,
    beta: 2,
    gamma: 3,
    [myKey]: 10,
};

let alpha = 5;
let myKey = 'fox-trot';

let entries = Object.entries(myAssocArr);

for (let entry of entries) {
    let [key, value] = entry; // sukraten zapis na let key = entry[0] i let value = entry[1]
    console.log(key, value);
}