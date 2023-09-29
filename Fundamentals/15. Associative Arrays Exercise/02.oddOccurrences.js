function solve(input) {
    // convert input into array
    let words = input.split(' ');
    let result = {};

    // fo every element of input array
    for (let word of words) {
        // - count word as lowercase
        word = word.toLocaleLowerCase();
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1; // namerili sme q za pruv put i pravim novo svoistvo
        }
    }

    // filter only words that occur an odd number of times
    /*let filtered = Object.entries(result).filter(([word, count]) => { // filter suzdava nov masiv
        if (count % 2 == 1) {
            return true;
        } else {
            return false;
        }
    });
        console.log(filtered.map(entry => entry[0]).join(' ')); // za vwsqko entry vurni samo tova, koeto se namira na entry[0]

        OR

        let output=[];
        for(let word in result){
            if(result[word] % 2 == 1){
                output.push(word);
            }
        }
        console.log(output.join(' '));
*/
    let filtered = Object
        .entries(result)
        .filter(([word, count]) => count % 2 == 1)
        .map(entry => entry[0])
        .join(' ');

    // print list of words
    console.log(filtered); // za vwsqko entry vurni samo tova, koeto se namira na entry[0]
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');