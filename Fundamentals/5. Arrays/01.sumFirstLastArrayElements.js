function firstLastElements(numbers) {
    let firstEl = numbers[0];
    let lastEl = numbers[numbers.length - 1]; // indeksirane po izraz

    console.log(firstEl + lastEl);
}
firstLastElements([20, 30, 40]);
firstLastElements([10, 17, 22, 33]);
firstLastElements([11, 58, 69]);