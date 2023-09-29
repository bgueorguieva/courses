function solve(arr) {
    let obj = {};

    // for (let index = 0; index < arr.length; index += 2) { // vurtya prez 1
    //     let product = arr[index];
    //     let calories = arr[index +1 ];
    //     obj[product] = Number(calories);
    // }

    //OR

    while (arr.length !== 0) { // vzimame 2 po 2
        let product = arr.shift();
        let calories = arr.shift();
        obj[product] = Number(calories);
    }

    console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])