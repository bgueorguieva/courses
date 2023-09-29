function solve(input) {
    let password = input.shift();

    while (input[0] !== "Complete") {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == "Make") {
            let letterCase = tokens[1];
            let index = Number(tokens[2]);
            let substring = password.substring(index, index + 1);
            if (letterCase == "Upper") {
                let replace = substring.toUpperCase();
                password = password.replace(substring, replace);
            } else {
                let replace = substring.toLowerCase();
                password = password.replace(substring, replace);
            }
            console.log(password);
        } else if (command == "Insert") {
            let index = Number(tokens[1]);
            let char = tokens[2];
            if (index < 0 && index > password.length) {
                continue;
            } else {
                let start = password.substring(0, index);
                let end = password.substring(index);
                password = start + char + end;
                console.log(password);
            }
        } else if (command == "Replace") {
            let char = tokens[1];
            if (password.includes(char)) {
                char = Number(char.charCodeAt());
                let replace = Number(tokens[2]);
                let valueSum = char + replace;
                let newChar = String.fromCharCode(valueSum);
                password = password.split(String.fromCharCode(char)).join(newChar);
                console.log(password);
            } else {
                continue;
            }
        } else if (command == "Validation") {
            if (password.length <= 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (/\W/.test(password)) {
                console.log('Password must consist only of letters, digits and _!');
            }

            if (!/[A-Z]/.test(password)) {
                console.log('Password must consist at least one uppercase letter!');
            }

            if (!/[a-z]/.test(password)) {
                console.log('Password must consist at least one lowercase letter!');
            }
            if (!/\d/.test(password)) {
                console.log('Password must consist at least one digit!');
            }
        } else {
            continue;
        }
    }
}
/*solve(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]); */
solve(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);