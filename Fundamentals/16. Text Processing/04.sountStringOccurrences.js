function count(text, word) {
    let tokens = text.split(' ');
    let count = 0;

    for (let token of tokens) {
        if (token == word) {
            count++;
        }
    }
    console.log(count);
}
count('This is a word and it also is a sentence',
    'is'
);
count('softuni is great place for learning new programming languages',
    'softuni'
);

//OR

function count(text, word) {
    let tokens = text.split(' ');
    let count = tokens.filter(x => x == word); // v noviya masiv shte sa samo elementite, koito vrushtat true

    console.log(count.length);
    // == (text,word) => text.split(' ').filter(x => x == word).length;
}
count('This is a word and it also is a sentence',
    'is'
);

//OR
function count(text, word) {
    word = ` ${word} `; // za da ne se vklyuchva This
    text = ` ${text} `; // za da hvashta i nachaloto i kraya
    let count = 0;
    let index = 0;

    while (text.indexOf(word, index) != -1) { // ako dumata q ima, a index e kude tursim
        count++;
        index = text.indexOf(word, index) + 1; // produljavame kum sledvashoto suvpadenie
    }
}
count('This is a word and it also is a sentence',
    'is'
);