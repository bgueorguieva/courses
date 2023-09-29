function mathPower(num, x) {

    let result = 1;

    for (let i = 1; i <= x; i++) { // ot 1, zashtoto ne iskame po 0 stepen
        result *= num;
    }
    console.log(result);
}
mathPower(2, 8);
mathPower(3, 4);
mathPower(12, 12);