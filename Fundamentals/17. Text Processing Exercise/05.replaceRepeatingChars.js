function solve(text) {
    let uniqueText = "";
    for (let index = 0; index < text.length; index++) {
        let currChar = text.charAt(index); // za da poluchim vsqka edna ot bukvichkite
        let nextChar = text.charAt(index + 1);
        if (currChar != nextChar) {
            uniqueText += currChar; // ako sa ednakvi nqma da go dobavim, preskachame gi
        }
    }
    console.log(uniqueText);
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');