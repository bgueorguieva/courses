function solve(arr) {
    let newArr = [];
    let num = 0;

    for (let index = 0; index < arr.length; index++) {
        num++; // zashtoto bez znachenie kakva komanda e chisloto se uvelichava
        let command = arr[index];
        if (command == "add") {
            newArr.push(num);
        } else if (command == "remove") {
            newArr.pop();
        }

    }
    if (newArr.length == 0) {
        console.log('Empty'); // znachi masiva e prazen
    } else {
        console.log(newArr.join('\n')); // cheat-vame da printira vseki element na nov red bez cikul
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add'
])