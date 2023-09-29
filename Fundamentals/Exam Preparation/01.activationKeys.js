function solve(input) {
    let rawKey = input.shift();

    while (input[0] !== "Generate") {
        let tokens = input.shift().split('>>>');
        let command = tokens[0];

        if (command == "Contains") {
            let substring = tokens[1];
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command == "Flip") {
            let charCase = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let substring = rawKey.substring(startIndex, endIndex);
            if (charCase == "Upper") {
                let replace = substring.toUpperCase();
                rawKey = rawKey.replace(substring, replace);
            } else {
                let replace = substring.toLowerCase();
                rawKey = rawKey.replace(substring, replace);
            }
            console.log(rawKey);
        } else if (command == "Slice") {
            let start = Number(tokens[1]);
            let end = Number(tokens[2]);
            let removeStr = rawKey.slice(start, end);
            rawKey = rawKey.replace(removeStr, '');
            console.log(rawKey);
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);