function wordsTracker(input) {
    // parse input - take first element and split
    let words = input.shift().split(' ');
    let result = {};
    for (let word of words) {
        result[word] = 0; // vsyaka dumichka stava na klyuch v obekt, zapisvame, suzdavame klyuchovete
    }

    // for each reamining element
    for (let word of input) {
        // - if element is matching, add 1 to count
        if (result.hasOwnProperty(word)) { // ako ima svoistvo chiito klyuch e dumichkata, proveryavame dali ima klyuch raven na tekushtata duma i broim
            result[word]++;
        }
    }

    // convert result to array
    let sorted = Object.entries(result); // zashtoto po sortirani stoinosti ne mojem da sortirame, samo chislata shte imame
    // sort by value
    sorted.sort((a, b) => {
        return b[1] - a[1];
        // ako iskame da vidim console.log ot sort, tryabva da slojim return 0;
        // ako e samo 1 red, mojem bez return sorted.sort((a, b) =>  b[1] - a[1]);
    });

    for (let [word, count] of sorted) {
        console.log(word, '-', count);

    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);