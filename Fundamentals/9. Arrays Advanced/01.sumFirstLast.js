function sumFirstLast(input) {
    let first = input.shift();
    let last = input.pop();

    console.log(Number(first) + Number(last));
}
sumFirstLast(['5', '10']);
sumFirstLast(['20', '30', '40']);

//Ako v masiva ima samo 1 element, za da e izpipano e:

function sumFirstLast(input) {
    let first = input.shift();
    let last = input.pop();

    console.log(Number(first) + Number(last));
}
sumFirstLast(['5', '10']);
sumFirstLast(['20', '30', '40']);