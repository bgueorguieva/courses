function extract(content) {
    const text = document.getElementById('content').textContent;
    let result = '';

    const pattern = /\((.+?)\)/g;

    let match = pattern.exec(text);
    while (match != null) { // povtarqme machvaneto dokato ne stigne null ili nqma poveche suvpadeniq
        result += match[1] + '; '; 
        // kogato ima grupi, rezultatut e masiv s index 0 cql match - [(Bulgaria), Bulgaria] i zatova e match[1]
        match = pattern.exec(text);
    }

    return result;
}