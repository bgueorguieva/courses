function matchPhone(input) {
    let text = input[0];
    let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g; // (ili prazno mqsto ili -), sled tova go pazim i proveryavame v registura s \1 za match
    // \b e word boundary bez partial matches
    // s ?: vadim ot registura i ne se pomni za sravnenie

    let match = pattern.exec(text);
    let result = [];

    while (match != null) {
        result.push(match[0].trim());
        match = pattern.exec(text);
    }
    console.log(result.join(', '));
}
matchPhone('359-2-222-2222, +359/2/222/2222, +359-2 222 2222');