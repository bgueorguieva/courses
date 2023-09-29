function merge(arr1, arr2) {
    //Step 1 creating new array
    let arr3 = [];
    //Step 2 creating for loop till arr1.length
    for (let index = 0; index < arr1.length; index++) {
        // Step 3 checking if index is odd or even
        if (index % 2 === 0) {
            //Step 4 add into the third array the sum of both elements at that index
            //arr1[index] + arr2[index];
            arr3.push(Number(arr1[index]) + Number(arr2[index])); // za da se vurne chislo
        } else {
            // Step 5 add the concatenation of both elements at that index
            arr3.push(`${arr1[index]}${arr2[index]}`);
        }
    }
    console.log(arr3.join(" - "));
}
merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
merge(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);