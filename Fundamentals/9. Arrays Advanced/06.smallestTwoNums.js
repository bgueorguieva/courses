function solve(nums) {
    return nums.sort((a, b) => a - b).slice(0, 2).join(' '); // v narastvasht red
}
console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));