function factorialDivision(num1, num2) {
    // factoriel ot 5 e !5 = 120
    // !5 = 5(n) X 4(n-1) x 3(n-1) x 2(n-1) X 1(n-1)
    // n e nasheto chislo
    // vsqko polojitelno chislo e factoriel
    function factorialCalculator(num) {
        let result = 1;
        while (num != 1) {
            result *= num;
            num -= 1;
        }
        return result;
    }
    let finalivisionRes = factorialCalculator(num1) / factorialCalculator(num2);
    console.log(finalivisionRes.toFixed(2));
}
factorialDivision(5, 2);