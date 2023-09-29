function palindromeIntegers(inputArray) {
    let arrOfNums = inputArray;

    function isPalindrome(num) {
        // 123 => [1,2,3] => check if 1 === 3
        // [1,2,3] => [3,2,1] => 321
        let startNum = num;
        let reversedNum = (Number(num.toString().split("").reverse().join("")));
        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }
    for (let index = 0; index < arrOfNums.length; index++) {
        let currNum = arrOfNums[index];
        console.log(isPalindrome(currNum));
    }
}
palindromeIntegers([123, 323, 421, 121]);