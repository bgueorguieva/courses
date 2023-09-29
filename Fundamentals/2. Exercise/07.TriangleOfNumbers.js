function solve(num) {
    for (let i = 1; i <= num; i++) {
        let line = ""; //tekushtata liniya, na koqto se namirame
        for (let j = 1; j <= i; j++) {
            line += i;
            if (j !== i) {
                line += " ";
            }
        }
        console.log(line);
    }
}
solve(3);