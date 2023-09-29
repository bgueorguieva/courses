//Fibonacci sequence style
function sumLastKNumSequence(n, k) {
    // create result array containing 1
    let result = [1];
    // repeat n-times
    for (let i = 0; i < n - 1; i++) {
        // - take last k element from result array
        let lastK = result.slice(-k); // poslednite kolko elementa shte vzeme
        // - sum elements
        let sum = 0;
        for (let element of lastK) {
            sum += element;
        }
        // - add sum to array
        result.push(sum);
    }
    console.log(result.join(' '));
}
sumLastKNumSequence(6, 3);
sumLastKNumSequence(8, 2);