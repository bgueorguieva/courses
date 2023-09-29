function solve(numsAsStrings) {
    let first = [...numsAsStrings].shift();
    // pravim kopie na masiva sus spread, za da ne burne NaN, ako ostane prazen masiva v input
    let last = [...numsAsStrings].pop();

    const result = Number(first) + Number(last);

    console.log(result);

}


solve(['20', '30', '40']);
solve(['5', '10']);