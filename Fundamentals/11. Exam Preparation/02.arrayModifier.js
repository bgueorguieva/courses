function array(input) {
    // parse input
    let nums = input.shift().split(' ').map(Number); // mahame purviya element i razdelyame elementite ot nego kato otdelni elementi v masiv i s map gi pravim chisla
    // until end, parse and execute command
    while (input[0] != 'end') { // triem proverenite i end vinagi shte ee na index 0
        let tokens = input.shift().split(' '); // razdelyame stoinostite, za da vzemem deisistvieto
        let command = tokens[0]; // vzimame komandata ot masiva
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (command) {
            case 'swap': // - swap elements
                let temp = nums[index1];
                nums[index1] = nums[index2];
                nums[index2] = temp;
                break;
            case 'multiply': // - multiply and store in first index
                nums[index1] *= nums[index2]; // umnozavame ednoto po drugoto i go pazim vuv vtoroto
                break;
            case 'decrease': // - decrease all by 1
                for (let i = 0; i < nums.length; i++) {
                    nums[i]--;
                }
                break;
        }
    }


    // print result
    console.log(nums.join(', '));
}
array([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
array([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);