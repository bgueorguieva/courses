function addAndSubsctract(arr) {
    let myArr = arr; // moje i bez da e promenliva
    let sumOfOriginalAwway = 0;
    let modifiedArraySum = 0;
    //Step 1  Creating for loop till array.length

    for (let index = 0; index < myArr.length; index++) {
        // Step 2 filling the su, of the original arrays
        sumOfOriginalAwway += myArr[index];
        // Step 3 searching for odd and even numbers

        if (myArr[index] % 2 === 0) {
            myArr[index] += index;
        } else {
            myArr[index] -= index;
        }
        // Step 4 filling the sum of the modified array
        modifiedArraySum += myArr[index];
    }
    //Printing array and the left over variables
    console.log(myArr);
    console.log(sumOfOriginalAwway);
    console.log(modifiedArraySum);
}
addAndSubsctract([5, 15, 23, 56, 35]);
addAndSubsctract([-5, 11, 3, 0, 2]);