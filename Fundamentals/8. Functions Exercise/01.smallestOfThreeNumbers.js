function smallestNumber(num1, num2, num3) {
    let smallestNum = function(num1, num2, num3) {
        let smallestNumber = 0;
        if (num1 <= num2 && num1 < num3) {
            smallestNumber = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            smallestNumber = num2;
        } else {
            smallestNumber = num3;
        }
        return smallestNumber;
    };
    console.log(smallestNum(num1, num2, num3));

}
smallestNumber(2, 5, 3);

//OR

function smallestNumber(num1, num2, num3) {
    let smallestNum = (num1, num2, num3) => Math.min(num1, num2, num3);

    console.log(smallestNum(num1, num2, num3));

}
smallestNumber(2, 5, 3);