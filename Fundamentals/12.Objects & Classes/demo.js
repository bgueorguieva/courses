let person = {
    name: 'Peter',
    age: 20,
    grades: [4, 5, 3, 5.5],
};


console.log(person.age);
person.age++;
console.log(person.age);
person.age = 24; // ako ne sushtestvuva, JS shte go suzdade
console.log(person.age);
person['age'] = 25; // sushtoto kato gornoto
console.log(person['age']);
let propName = 'age';
console.log(person[propName]);
console.log(person['a' + 'ge']);

console.log(person);
person.lastName = 'Johnson'; // taka se dobaya nov klyuch
console.log(person);