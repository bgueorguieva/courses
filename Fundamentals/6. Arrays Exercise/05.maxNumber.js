function maxNum(arr) {
    // step 1 creating new array in  which we;kk save the op integers
    let topIntegerArr = [];
    // step 2 create for loop till arr.length index++
    for (let index = 0; index < arr.length; index++) {
        // step 3 taking the current element from our array on that step
        let currElement = arr[index];
        // creating a boolean value for the biggest integer value
        let isTopInteger = true;
        // step 4 creating second for loop till array.length index++ but it'll start from index + 1
        for (let j = index + 1; j < arr.length; j++) {
            // creating next element from the array variable
            let nextEl = arr[j];
            //Creating condiitonal expresion checking if currElement <= nextEl
            if (currElement <= nextEl) {
                isTopInteger = false;
                break;
            }
        }
        // creating conditional expression isTopInteger then push it to topIntegerArr
        if (isTopInteger) {
            topIntegerArr.push(currElement);
        }
    }
    // final step print
    console.log(topIntegerArr.join(' '));
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);