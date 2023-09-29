function revealWords(words, strentence) {
    words = words.split(', '); //masiv s dumichkite, za da raboti i s poveche dumi
    for (let word of words) {
        strentence = strentence.replace('*'.repeat(word.length), word);
    }
    console.log(strentence);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');