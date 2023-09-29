function stringSubstring(searchedWord, sentence) {
    let words = sentence.split(' ');

    for (let word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) { // premahvame razlikata v dumichkite, ako ima match s golyama i malka
            console.log(searchedWord);
            return; // za da sprem programata, ako se nameri rezultata, bez da go gubim
        }
    }
    console.log(`${searchedWord} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');