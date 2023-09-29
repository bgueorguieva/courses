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
format(3.33);
format(2.99);