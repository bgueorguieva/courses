function printAndSum(startNum, endNum) {
    let sum = 0;
    let sequence = '';

    for (let index = startNum; index <= endNum; index++) {
        sum += index;
        sequence += index + " "; // za da ima speis mejdu chislata
    }
    console.log(sequence.trim()); // za da nqma posledniya space nakraya na sequence
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);