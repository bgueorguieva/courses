function solve(input) {
    // regex pazi sastoyanie, zatova moje da se naloji da se zaqvyava v cikula

    //take text from input
    let text = input[0];

    // find regexp matches
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g; // or  /@([A-Za-z]{3,})@@([A-Za-z]{3,})@#([A-Za-z]{3,})##([A-Za-z]{3,})#/
    // {} quantifier, ako e prazno sled , broi do bezkrai
    // (@|#) & (\1) za backreference from register za match ot nomer grupa, v sluchaq 1, moje i bez grupa tam

    let match = pattern.exec(text);
    let count = 0;
    let result = [];

    // for every match
    while (match != null) {
        // - add to counter
        count++;
        // - check if maches are mirrored
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split('').reverse().join('');

        if (word1 == reversed) {
            //-- if yes, add result
            result.push(`${word1} <=> ${word2}`);
        }

        match = pattern.exec(text); // proveryavame otnovo dali ima match, za da se smenya
    }
    // print
    if (count == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${count} word pairs found!`)
    }

    if (result.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    }

}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);