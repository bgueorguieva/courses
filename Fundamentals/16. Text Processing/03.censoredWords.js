function censor(str, word) {
    //test solving without any methods
    while (str.includes(word)) { // dokato ya ima dumata
        str = str.replace(word, '*'.repeat(word.length));

    }
    console.log(str);
}
censor('A small sentence with some small words', 'small');
censor('A small sentence with some words', 'small');

//OR
function censor(str, word) {
    let tokens = text.split(word);

    console.log(tokens.join('*'.repeat(word.length)));
}
censor('A small sentence with some small words', 'small');
censor('A small sentence with some words', 'small');