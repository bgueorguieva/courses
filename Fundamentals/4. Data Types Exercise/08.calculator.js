function calculator(num1, operator, num2) {
    let sum;
    switch (operator) {
        case "+":
            sum = num1 + num2;
            console.log(sum.toFixed(2));
            break;
        case "-":
            sum = num1 - num2;
            console.log(sum.toFixed(2));
            break;
        case "*":
            sum = num1 * num2;
            console.log(sum.toFixed(2));
            break;
        case "/":
            sum = num1 / num2;
            console.log(sum.toFixed(2));
            break;
    }

}
calculator(5, '+', 10);
calculator(25.5, '-', 3);