function solve(input) {
    let str = input.shift();

    while (input[0] !== "Done") {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == "TakeOdd") {
            let tempStr = "";
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (i % 2 == 1) {
                    tempStr += char;
                }
            }
            str = tempStr;
            console.log(str);
        } else if (command == "Cut") {
            let startIndex = Number(tokens[1]);
            let endIndex = startIndex + Number(tokens[2]);
            let left = str.slice(0, startIndex);
            let right = str.slice(endIndex);
            str = left + right;
            console.log(str);
        } else if (command == "Substitute") {
            if (str.includes(tokens[1])) {
                str = str.split(tokens[1]).join(tokens[2]);
                console.log(str);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${str}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);