function schoolGrades(input) {
    let result = new Map();

    // for every entry
    for (let line of input) {

        // - parse and convert numbers
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        // - ensure grades array always exists
        if (result.has(name) == false) {
            result.set(name, []);
        }
        // - find existing grades and add new grades
        let existing = result.get(name);
        for (let grade of grades) {
            existing.push(grade); // otrazyava se v map-a, zashoto e referenten tip
        }
        // or instead of for loop
        // grades.forEach(x => existing.push(x));
    }
    // sort by student name
    let sorted = Array.from(result); // prevrushta Map v masiv
    sorted.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);