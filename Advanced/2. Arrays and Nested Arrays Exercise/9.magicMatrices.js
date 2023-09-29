function solve(matrix) {
    let isMagical = true;

    for (let index = 0; index < matrix.length - 1; index++) { // -1, za da ne se sravnyava posledniq red s nesushtestvuvash next red
        let sumRowOne = matrix[index].reduce((a, b) => a + b, 0); // vzimame chislata, minavame prez tqh i gi subirame
        let sumRowTwo = matrix[index + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            // predpolagame, che e pravilna matritsa -> vsichkite masivi sa s ednakwa broika
            sumColOne += matrix[index][j];
            sumColTwo += matrix[index + 1][j];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false;
        }
    }
    return isMagical;
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])