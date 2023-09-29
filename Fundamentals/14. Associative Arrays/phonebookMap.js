function phoneBook(input) {
    let result = new Map();

    // for every line in input
    for (let line of input) {
        // - parse line
        let [name, phone] = line.split(' ');

        // - store data
        result.set(name, phone);
    }
    //let keys = result.keys();
    for (let key of result.keys()) {
        console.log(key, '->', result.get(key));
    }
    /* or
let entries = result.entries();
for (let [name, phone] of entries) {
console.log(name, '->', phone);
}
    */

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);