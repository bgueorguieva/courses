function sayHi() {
    console.log(`${this.name} says hi!`);
}

const person = {
    name: 'Peter',
    age: 23
};
const person2 = {
    name: 'John',
    sayHi
};

person.sayHi = sayHi;

person.sayHi();
person2.sayHi();

// 1h30 from lecture