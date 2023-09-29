function negativePositiveNum(input) {
    let result = [];

    // to do process input
    for (let element of input) {
        element = Number(element);
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    for (let element of result) {
        console.log(element);
    }
}
negativePositiveNum(['7', '-2', '8', '9']);
negativePositiveNum(['3', '-2', '0', '-1']);