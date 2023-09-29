function echo(param) {
    // print data type
    // print calue, if type is string or num
    // otherwise, print error message
    let type = typeof param;
    console.log(type);
    if (type == 'string' || type == 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }


}
echo('Hello, JavaScript!');
echo(18);
echo(null);
echo(Symbol());