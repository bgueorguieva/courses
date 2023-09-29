function solve(num) {
    let sum = 0;

    if (num >= 0) {
        for (let i = 2; i <= num; i++) {
            if (num % i == 0) {
                let result = num / i;
                sum += result;
            }
        }
    }
    if (num == sum) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}
solve(6);
solve(28);
solve(1236498);