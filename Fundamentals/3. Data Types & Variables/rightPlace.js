function place(word, char, match) {
    // create variable for result
    // combine word and char
    // - read characters one by one
    // -- if currect character is '_' add char parameter to result
    // -- else add current character to result
    // compare result with match and print message
    let result = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            result += char;
        } else {
            result += word[i];
        }
    }
    if (result == match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}
place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');