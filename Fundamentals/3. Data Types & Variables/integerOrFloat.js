function solve(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);
    let type = 'Integer'; // priemame, che ako nqma tochka, znachi e cqlo chislo i ne sme promenili stoinostta

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float';
            break;
        }
    }

    console.log(`${sum} - ${type}`);
}
solve(1, 2, 3);
console.log('---');
solve(1, 2, 3.14);

//OR

function solve(a, b, c) {
    let sum = a + b + c;
    let type = 'Integer'; // priemame, che ako nqma tochka, znachi e cqlo chislo i ne sme promenili stoinostta

    let roundedSum = Math.round(sum);
    if (sum != roundedSum) {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}
solve(1, 2, 3);
solve(1, 2, 3.14);

//OR

function solve(a, b, c) {
    let sum = a + b + c;
    let type = 'Integer'; // priemame, che ako nqma tochka, znachi e cqlo chislo i ne sme promenili stoinostta

    if (sum % 1 != 0) { // ako ne e 0 (cqlo chislo) znachi e desetichno
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}
solve(1, 2, 3);
solve(1, 2, 3.14);