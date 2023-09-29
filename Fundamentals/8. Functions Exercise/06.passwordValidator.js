function passwordValidator(password) {
    function isLengthEnough(stringPass) {
        return stringPass.length >= 6 && stringPass.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPass) {
        // 'hello' => 'h', 'e', ...
        for (let currCharIndex of stringPass) {
            let currChar = currCharIndex.charCodeAt(0);
            if (!(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)) {
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(stringPass) {
        let count = 0;
        for (let charIndex of stringPass) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false; // moje i bez ternarniya operator
    }
    let isLengthValid = isLengthEnough(password);
    let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
    let hasAtLeastTwoNums = hasAtLeastTwoDigits(password);

    if (isLengthValid && isLettersAndDigitsOnly && hasAtLeastTwoNums) {
        console.log("Password is valid");
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasAtLeastTwoNums) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');