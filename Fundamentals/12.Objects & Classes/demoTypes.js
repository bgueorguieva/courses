//primitive demo
function increment(value) {
    value += 1; // tova e kopie
}
let num = 10; // originalut si stoi
increment(num);

console.log(num)

//reference demo
function increment(ref) {
    ref.number += 1;
}
let myObj = {
    numer: 5,
}
increment(myObj);

console.log(myObj);