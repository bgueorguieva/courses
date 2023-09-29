function immitationGame(input) {
    let message = input.shift();

    let currLine = input.shift();

    while (currLine !== 'Decode') {
        let tempMessage = '';
        let tokens = currLine.split('|');
        let command = tokens[0];

        if (command === 'Move') {
            let lettersNum = +tokens[1]; // + e drug nachin da se prevurne v number
            let lettersToMove = message.substring(0, lettersNum);
            tempMessage = message.replace(lettersToMove, ""); // zamestvame s prazen string, premahvame gi
            tempMessage += lettersToMove;
            message = tempMessage;
        } else if (command === "Insert") {
            let index = Number(tokens[1]);
            let value = tokens[2];
            tempMessage = message.split(""); // za da poluchim masiv ot chars
            tempMessage.slice(index, 0, value); // na index-a na koito iskame, bez da triem nito edin, i da dobavim stoinostta, koqto tursim
            message = tempMessage.join("");
        } else if (command === "ChangeAll") {
            let subsctring = tokens[1];
            let replacement = tokens[2];

            while (message.includes(subsctring)) {
                tempMessage = message.replace(subsctring, replacement);
                message = tempMessage;
            }
            message = tempMessage;
        }

        currLine = input.shift(); // vzimame vsqka sledbashta komanda
    }
    console.log(`The decrypted message is: ${message}`);
}
immitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
immitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);