function oddAndEvenSum(num) {
    let numberAsText = num.toString();

    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let currNum = Number(numAsString[index]);
            if (currNum % 2 != 0) {
                oddSum += currNum;
            }
        }
        return oddSum;
    }

    function totalEvenSum(numAsText) {
        let evenSum = 0;
        for (let index = 0; index < numAsText.length; index++) {
            let currNum = Number(numAsText[index]);
            if (currNum % 2 == 0) {
                evenSum += currNum;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`);
}
oddAndEvenSum(1000435);