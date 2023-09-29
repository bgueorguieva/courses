function condenseArrayToNumbers(arr) {
    // while the array has more than 1 element
    // - for every element in array, except the last, sum with next element
    let condensed = [];
    for (let n of arr) {
        condensed.push(n);
    }

    while (condensed.length > 1) {
        let temp = [];
        for (let i = 0; i < condensed.length - 1; i++) {
            temp.push(condensed[i] + condensed[i + 1]);
        }
        condensed = temp; // zamenyame masivite
    }
    console.log(condensed[0]); // [0] zashtoto produljava da e masiv

}

condenseArrayToNumbers([2, 10, 3]);
condenseArrayToNumbers([5, 0, 4, 1, 2]);