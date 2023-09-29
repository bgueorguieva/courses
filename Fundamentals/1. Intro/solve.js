function solve() {
    let n = 3;
    while (n <= 100) {
        console.log(n);
        n += 3;
    }
}
solve();

//OR

for (let n = 3; n <= 100; n += 3) {
    console.log(n);
}