function charToString(char1, char2, char3) {
    let converted = "" + char1 + char2 + char3; // vinagi stava string

    console.log(converted);
}
charToString('a', 'b', 'c');
charToString('%', '2', 'o');
charToString('1', '5', 'p');

//OR

function charToString(char1, char2, char3) {

    console.log(`${char1}${char2}${char3}`); // interpolatsiya i e po-burza operatsiya i direktno go pravi string
}
charToString('a', 'b', 'c');