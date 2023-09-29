function modernTimes(str) {
    let words = str.split(' ');
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) { // vrushta boolean
            let asciiCode = word.charCodeAt(1); // da hvane vsichko ot vtoriya poreden index sled #
            let isLetter = // promenliata stava avtomatichno boolean
                (asciiCode >= 65 && asciiCode <= 0) || // upper case letters
                (asciiCode >= 97 && asciiCode <= 122) // lower  case letters
            if (isLetter) // proverka dali v dumata ima samo bukvi, check ASCII table
                console.log(word.substring(1)); // shte otrejem purvita simvol i shte vurne vsichko do kraq na stringa
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #reg1ions as the #number sign');

// OR
function modernTimes(str) {
    let arr = [];
    let words = str.split(' ');
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            arr.push(word.substring(1));
        } // vrushta boolean
        for (let word of arr) {
            for (let index = 0; index < word.length; index++) {
                let currChar = word[index];
                let asciiCode = currChar.charCodeAt(0)
                if ((asciiCode >= 65 && asciiCode <= 0) ||
                    (asciiCode >= 97 && asciiCode <= 122)) {
                    console.log(word);
                }
            }

        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #reg1ions as the #number sign');