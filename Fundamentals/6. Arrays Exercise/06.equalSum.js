function equalSum(arr) {
    // step 1 boolean value to check if there are any equal sums
    let hasEqualSum = false;
    // step 2 creating for loop until arr.length starting from index 0
    for (let index = 0; index < arr.length; index++) {
        // 3 creating two variables for left and right sum
        let leftSum = 0;
        let rightSum = 0;
        // step 4 creating for loop from index - 1 till 0 decreasing with 1
        for (let j = index - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        // step 5 for loop from index + 1 till arr.length withstep +1
        for (let k = index + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        // step 6 checking if the left sum is equal to the right sum and print index
        if (leftSum === rightSum) {
            console.log(index);
            hasEqualSum = true;
        }
    }
    if (!hasEqualSum) {
        console.log('no');
    }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);