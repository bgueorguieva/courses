function sameNums(number) {
    let input = String(number) // turn to string
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0];

    for (let index = 0; index < input.length; index++) {
        let currentDigit = Number(input[index]); // ili +input[index]
        sum += currentDigit;
        if (firstDigit != currentDigit) {
            isSame = false; // dvete chisla ne sa ednakvi
        }
    }
    console.log(isSame);
    console.log(sum);

}
sameNums(1234);