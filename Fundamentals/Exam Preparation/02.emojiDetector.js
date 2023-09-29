function solve(input) {
    let emojis = input;
    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    let match = pattern.exec(emojis);
    let coolPoints = 0;
    let emojiCount = 0;
    let coolThreshold = 0

    for (let emoji of emojis) {
        let digitsPattern = /\d/g;
        let allDigits = emoji.match(digitsPattern);
        if (allDigits !== null) {
            coolThreshold = allDigits.join('');
        }
    }
    while (match !== null) {
        emojiCount++;
        let emoji = match.groups['emoji'];

        for (let char of emoji) {
            coolPoints += emoji.charCodeAt(char);
        }
    }
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);