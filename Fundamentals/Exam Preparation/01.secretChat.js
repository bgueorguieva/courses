function solve(input) {
    let commands = { // kratuk zapis
        InsertSpace,
        Reverse,
        ChangeAll,
    };
    // take text from input
    let text = input.shift();

    // parse commands
    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(':|:'); // vrushta masiv s otdelnite stoinosti
        let name = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2]; // nyama problem da nyama vtori parametur  JS

        let command = commands[name];
        text = command(text, p1, p2);
    }

    // print result
    console.log(`You have a new text message: ${text}`);

    function InsertSpace(text, index) {
        // - take left and right part (divide at index)
        let left = text.slice(0, index); // ekskluzivno, do indexa
        let right = text.slice(index); // inkluzivno, ot indexa; ako ne podadem vtori parametur vzima do kraya

        let result = left + ' ' + right;
        // -- print current text
        console.log(result);
        // -- return left + space + right
        return result;
    }

    function Reverse(text, substr) {
        // - find location of substring
        let index = text.indexOf(substr);
        // - if found:
        if (index != -1) {
            // -- take left part from start to index
            let left = text.slice(0, index);
            // -- take right part from end of substring to end of text
            let right = text.slice(index + substr.length);
            let result = left + right + substr.split('').reverse().join(''); // prevrushtame substr v masiv, reverse-vame go, subirame
            // samo masiv ima reverse!
            // -- print current text
            console.log(result);
            // -- return left + right + reversed substring
            return result;
        } else {
            // - otherwise, print error
            console.log('error');
            return text;
        }
    }

    function ChangeAll(text, substr, replacement) {
        // - replace all occurrences of substring with replacement
        let result = text.split(substr).join(replacement); // zamenyame vsichki popadeniya v text
        // - print current text
        console.log(result);
        return result;
    }
}


solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);