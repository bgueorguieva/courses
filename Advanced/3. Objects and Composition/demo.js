const person = {
    name: 'Peter',
    age: 23
};

console.log(person.name);

person.name = 'John';

console.log(person);

person.lastName = 'Jackson';

console.log(person);

console.log(person['age']); //zashtoto e stringov index, kato indexite kato indexite v masivite
// klyucha moje da idva i ot promenliva, ako primerno 'age' e v promenliva propName = 'age'