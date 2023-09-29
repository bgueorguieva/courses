function employees(list) {
    let listOfEmployees = {};

    for (let employee of list) {
        listOfEmployees.name = employee;
        listOfEmployees.personalNum = employee.length;
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNum}`)
    }
}

// OR with class
function employees(list) {
    let listOfEmployees = [];
    class Employees {
        constructor(name, length) {
            this.name = name;
            this.length = length;
        }
    }
    for (let employee of list) {
        let currEmployee = new Employees(employee, employee.length);
        listOfEmployees.push(currEmployee); // suzdavat se po 1 obekt za vhod v masiva
    }
    listOfEmployees.forEach(currEmployee => console.log(`Name: ${currEmployee.name} -- Personal Number: ${currEmployee.personalNum}`));

}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);