function solve(input) {
    let pattern = /[0-9]/g;
    let match = input[0].match(pattern);
    let coolNum = match.reduce((a, b) => Number(a) * Number(b));

    let pattern1 = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let match1 = pattern1.exec(input);
    let counter = 0;
    let list = {};

    while (match1 !== null) {
        let emoji = match1[0];
        let sum = 0;
        list.hasOwnProperty(emoji) ? '' : counter++;

        for (let i = 2; i < emoji.length - 2; i++) {
            let num = Number(emoji[i].charCodeAt());
            sum += num;
        }

        list[emoji] = {
            sum
        }


        match1 = pattern1.exec(input);
    }
    console.log(`Cool threshold: ${coolNum}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);

    for (let emoji in list) {
        if (list[emoji].sum > coolNum) {
            console.log(emoji);
        }
    }
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);