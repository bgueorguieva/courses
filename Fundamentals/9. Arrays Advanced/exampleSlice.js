let arr = [5, 3, 8, -2, 11, -23];

let r = mySlice(arr);
let r2 = input.slice();
console.log(r, r2);

function mySlice(arr, start, end) {
    let result = [];
    // if proverki, za da rabotim s otritsatelni stoinosti i da izbqgame undefined
    if (end == undefined) {
        end = arr.length;
    }
    if (start == undefined) {
        start = 0;
    }
    if (start < 0) {
        start += arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }

    console.log(result);
}