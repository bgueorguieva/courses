function processOddNums(arr) {
    // filter only elements at odd positions (index)
    let filtered = arr.filter((x, i) => i % 2 == 1); // moje da priema 2 parametura; x e stoinostta, i e indexa na stoinostta
    // double filtered values
    let doubled = filtered.map(x => x * 2);
    //reverse resulting array
    let result = doubled.reverse();

    console.log(result.join(' '));
}
processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);

//OR

function processOddNums(arr) {
    // filter only elements at odd positions (index)
    // double filtered values
    //reverse resulting array

    console.log(arr.filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ')); // chain na operatsii
}
processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);

//OR

arrayInput => arrayInput
    .filter((x, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ')