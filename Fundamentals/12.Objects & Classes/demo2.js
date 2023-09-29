let person = {
    name: 'Peter',
    age: 20,
    grades: [4, 5, 3, 5.5],
};

let keys = Object.keys(person);
for (let key of keys) {
    console.log(key, person[key]);
}