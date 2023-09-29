function sumDigits(input) {
    let sum = 0;
    let numAsString = input.toString(); // direktno prevrushta v tekst

    for (let char of numAsString) { // for of loop
        sum += Number(char);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);

//OR
function sumDigits(input) {
    let sum = 0;
    let numAsString = input.toString(); // direktno prevrushta v tekst

    numAsString.split("").forEach(function(digit) { // direktno v array dava characters
        sum += Number(char);
    });

    console.log(sum);
}
sumDigits(245678);

//OR

function sumDigits(input) {
    let sum = 0;
    let numAsString = input.toString(); // direktno prevrushta v tekst

    numAsString.split("").map(function(char) {
        sum += Number(char);
    });

    console.log(sum);
}
sumDigits(245678);

// OR the common one for now is with for loop