function solve(text) {
    let words = [];
    let currWord = text[0]; // S

    for (let index = 1; index < text.length; index++) {
        if (text[index].toUpperCase() !== text[index]) { // ako bukvata e upper case
            currWord = currWord.concat(text[index]); //Sp
        } else {
            words.push(currWord);
            currWord = text[index];
        }
    }
    words.push(currWord);
    console.log(words.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');