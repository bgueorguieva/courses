function reversedChars(char1, char2, char3) {

    console.log(`${char3} ${char2} ${char1}`);
}
reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');

//OR

function reversedChars(char1, char2, char3) {
    let array = [char3, char2, char1].join(' ');
    // charArray [ '&', 'L', 'l'].join(' ') => '& L l'
    console.log(array);
}
reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');