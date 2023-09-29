function arrayRotation(arr, rotations) {
    // for loop till array.length index++
    // array[index] = array[0] // 51 tuk i otiva nakraya, purviya minava nai-otzad

    for (let index = 0; index < rotations; index++) { // kolkoto rotatsii, tolkova puti shte vurti
        // step 2 removing and savin the value of the current interation index of the array
        let currentNum = arr.shift(); // premahva purviyat element i go vruhsta , dava undefined, ako nyama stoinost
        // step 3 adding the value of the current element to the end of the array

        arr.push(currentNum);

    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);