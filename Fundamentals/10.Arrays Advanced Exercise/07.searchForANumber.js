function searchForNumber(array, input) {
    let numbersToTakeFromArr = input[0];
    let deleteNumbersFromArr = input[1];
    let searchedNum = input[2];

    let myNewArr = array.splice(0, numbersToTakeFromArr);
    console.log(myNewArr);
    myNewArr = myNewArr.splice(deleteNumbersFromArr);
    console.log(myNewArr);
    let count = 0;
    for (let i = 0; i < myNewArr.length; i++) {
        if (myNewArr[i] === searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`)
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);