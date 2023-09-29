function bombNums(sequenceOfNums, specialNum) {
    let bombNumber = specialNum[0];
    let bombRadius = specialNum[1];

    let indexOfBomb = sequenceOfNums.indexOf(bombNumber);
    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1; // umnojavame ot lyavata strana i drugite ot dyasnata strana ot silata, kolko chisla shte unishtojim
        sequenceOfNums.splice(startExplosionIndex, explosionLength);
        indexOfBomb = sequenceOfNums.indexOf(bombNumber);
    }
    //let sum = sequenceOfNums.reduce((a, b) => a + b, 0); // ot kude da zapochne da broi v nashiq masiv, ot index 0
    //OR
    let sum = 0;
    for (let numbers of sequenceOfNums) {
        sum += numbers;
    }
    console.log(sum);
}
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);