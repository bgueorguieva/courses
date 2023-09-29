function solve(num) {

    let percentages = "%".repeat(num / 10);
    let dots = ".".repeat(10 - num / 10);

    if (num / 100 !== 1) {
        console.log(`${num}% [${percentages}${dots}]`);
        console.log(`Still loading...`);

    } else {
        console.log(`100% Complete!`);
        console.log(`[${percentages}${dots}]`);
    }
}

solve(30);
solve(50);