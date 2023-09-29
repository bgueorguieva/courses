function login(input) {
    let userName = input.shift();
    let copy = userName.split(' ');
    input.unshift(copy);

    let count = 0;

    for (let i = 1; i < input.length; i++) {
        if (count >= 3) { // 4 posledovatelni nevalidni vhoda, za da ne produlji nadolu
            console.log(`User ${userName} blocked`);
            break;
        }
        let reverseString = input[i];
        reverseString = reverseString.split(''); // razdelya na otdelni characters
        reverseString = reverseString.reverse();
        reverseString = reverseString.join(''); // subira gi obratno

        if (reverseString !== userName) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${userName} logged in.`);
        }
        count++;
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['Acer', 'login', 'go', 'let me in', 'recA']);

//OR

function login(input) {
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i].split('').reverse().join("")) {
            console.log(`User ${userName} blocked`);
            break;
        }
        let reverseString = input[i];
        reverseString = reverseString.split(''); // razdelya na otdelni characters
        reverseString = reverseString.reverse();
        reverseString = reverseString.join(''); // subira gi obratno

        if (reverseString !== userName) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${userName} logged in.`);
        }
        count++;
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['Acer', 'login', 'go', 'let me in', 'recA']);