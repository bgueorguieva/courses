function solve(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result += input[i];
            result += ' ';
        }
    }

    console.log(result);
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);

// OR

function solve(input) {
    let result = '';

    for (let i = 0; i < input.length; i += 2) { // pravim stupkata vinagi da ni e 2
        result += input[i] + ' ';
    }

    console.log(result);
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);

// OR

function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i += 2) {
        result[result.length] = input[i]; // dobavyame v nov masiv chrez length i toi taka raste
    }

    console.log(result.join(' ')); // prevrushta gi v string
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);