function lowerOrUpper(charInput) {
    if (charInput === charInput.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('L', 'f');

//OR

function lowerOrUpper(charInput) {
    console.log(charInput === charInput.toUpperCase() ? "upper-case" : "lower-case"); // po-chisto i praktichno

}
lowerOrUpper('L', 'f');