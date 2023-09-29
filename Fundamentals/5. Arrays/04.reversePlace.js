function reverse(arr) {
    // repeat for all elements from the beginning to middle
    // - swap current element (start + i) with element in other half (end - i)
    // - use temp variable to store value during swap

    for (let i = 0; i < arr.length / 2; i++) {
        let k = arr.length - 1 - i;
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    console.log(arr.join(' '));
}
reverse(['a', 'b', 'c', 'd', 'e']);
reverse(['abc', 'def', 'hig', 'klm', 'nop', 'shd']);

//OR
function reverse(arr) {
    // repeat for all elements from the beginning to middle
    // - swap current element (start + i) with element in other half (end - i)
    // - use temp variable to store value during swap
    let k = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++, k--) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    console.log(arr.join(' '));
}
reverse(['a', 'b', 'c', 'd', 'e']);