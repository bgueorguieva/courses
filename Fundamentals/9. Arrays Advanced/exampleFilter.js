let nums = [5, 2, 8, 28];

let r1 = nums.filter(x => x > 5);
let r2 = myFilter(nums, x => x > 5);

console.log(r1, '\n', r2);

function myFilter(arr, predicate) {
    let result = [];

    for (let element of arr) {
        if (predicate(element)) {
            result.push(element);

        }
    }
    return result;
}