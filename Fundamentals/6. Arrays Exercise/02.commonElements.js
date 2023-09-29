function commonElements(arrayOne, arrayTwo) {
    // Fist step is creating for loop till arrayOne length
    for (let index = 0; index < arrayOne.length; index++) {
        // Second step Creating nested for loop till arrayTwo length
        for (let j = 0; j < arrayTwo.length; j++) {
            //Third step Checking if arrayOne[index] === arrayTwo[]
            if (arrayOne[index] === arrayTwo[j]) {
                console.log(arrayOne[index]); // moje i arrayTwo, ravni sa
            }
        }
    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);