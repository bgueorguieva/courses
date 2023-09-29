function printCertificate(grade, names) {
    if (pass(grade)) {
        printHeader();
        printName(names);
        format(grade);
    } else {
        console.log('Student does not qualify');
    }

    function printHeader() {
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');
    }

    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function format(grade) {

        let formatted = grade.toFixed(2); // prevrushta se v srtring i zapazva nulata
        let descr;

        if (grade < 3) {
            formatted = '2';
            descr = 'Fail';
        } else if (grade < 3.5) {
            descr = 'Poor';
        } else if (grade < 4.5) {
            descr = 'Good';
        } else if (grade < 5.50) {
            descr = 'Very good';
        } else {
            descr = 'Excellent';
        }
        console.log(`${descr} (${formatted})`);
    }

    function pass(grade) {

        return grade >= 3;
    }
}



printCertificate(5.25, ['Peter', 'Carter']);
printCertificate(3.80, ['Lisa', 'Black']);