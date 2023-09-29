function charsInRange(char1, char2) {
    // console.log(char1.charCodeAt(0), char2.charCodeAt(0)); // poluchavame koda ot ASCII tablitsata
    // check which of the parametres is first in the chart with Math.min & Math.max

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0)); // i dvete sa 0, zashtoto dvata parametura sa s po 1 index, ako gi gledame kato masivi
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let charsInRangeArray = [];

    for (let index = startChar + 1; index < endChar; index++) {
        charsInRangeArray.push(String.fromCharCode(index));
    }
    console.log(charsInRangeArray.join(" "));
}
charsInRange('a', 'd');