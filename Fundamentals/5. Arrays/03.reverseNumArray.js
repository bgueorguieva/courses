function reverseArrayNums(n, arr) {

    let slice = []; // syzdavane na prazen masiv
    // take slice from original array
    for (let i = 0; i < n; i++) {
        slice.push(arr[i]); // dobavyame kolkoto elementi se iska
    }

    let result = '';
    // print new awway in reverse kato obhojame masiva ot zad napred

    for (let j = slice.length - 1; j >= 0; j--) {
        result += slice[j] + ' ';
    }
    console.log(result);
}
reverseArrayNums(3, [10, 20, 30, 40, 50]);
reverseArrayNums(4, [-1, 20, 99, 5]);
reverseArrayNums(2, [66, 43, 75, 89, 47]);

// OR

function reverseArrayNums(n, arr) {

    let slice = []; // syzdavane na prazen masiv
    // take slice from original array
    for (let i = 0; i < n; i++) {
        slice.push(arr[i]); // dobavyame kolkoto elementi se iska
    }

    let result = '';
    // print new array in reverse kato obhojame masiva ot zad napred

    for (let j = slice.length - 1; j >= 0; j--) {
        result.push(slice[i]);
    }
    console.log(result.join(' '));
}
reverseArrayNums(3, [10, 20, 30, 40, 50]);

// OR

function reverseArrayNums(n, arr) {

    let result = '';
    // print new array in reverse kato obhojame masiva ot zad napred

    for (let j = n - 1; j >= 0; j--) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}
reverseArrayNums(3, [10, 20, 30, 40, 50]);