function createStudent(name, grade) {
    let result = {};

    result.name = name;
    result.grade = grade;

    return result;
}

let myStudent = createStudent('Peter', 5.50);

console.log(myStudent);

let otherStudent = createStudent('John', 4.80);

console.log(otherStudent);

// prevrushtane v klas

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}
let myStudent = new Student('Peter', 5.50);
console.log(myStudent); // printira se, che e ot klas Student, pomnqt klasa si
myStudent.sayHi();

let otherStudent = new Student('Peter', 5.50);
console.log(otherStudent);
otherStudent.sayHi();