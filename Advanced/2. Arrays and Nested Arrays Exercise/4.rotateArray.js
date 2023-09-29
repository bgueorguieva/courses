function solve(arr, rotations) {
    for (let index = 0; index < rotations && rotations <= arr.length; index++) { // stava li s  && rotations <= arr.length?
        // remove the last element from array -> pop
        //add that element to the start of the array -> unshift

        arr.unshift(arr.pop()) // purvo vzimam poslednoto chislo i vednaga go slagam na purvi index
    }
    console.log(arr.join(' '));
}
solve(['1',
        '2',
        '3',
        '4'
    ],
    7
)