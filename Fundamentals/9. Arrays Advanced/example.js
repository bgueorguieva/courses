let arr = [5, 3, 8, -2, 11, -23];

console.log(myIncludes(arr, 4));
console.log(myIncludes(arr, -23));

console.log(myIndexOf(arr, 4));
console.log(myIndexOf(arr, -23));

function myIncludes(arr, value) {
    //ne ni tryabva index
    for (let element of arr) {
        if (element == value) {
            return true; // ako e true, shte prekusne izpulnenieto na funktsiyata
        }
    }

    return false;
}

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }

    return -1;
}