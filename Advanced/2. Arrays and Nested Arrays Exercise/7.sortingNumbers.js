function solve(arr) {
    let result = [];
    arr.sort((a, b) => b - a); // za da podredim malkite i golemite

    while (arr.length !== 0) {
        result.push(arr.pop()); // vzimame posledniq element ot nashiya masiv
        result.push(arr.shift()); // vzimame ot nachaloto
    }
    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])