function sorting(array) {
    //console.log("before dorting the array", array);
    array = array.sort((a, b) => b - a);
    // console.log(array);
    // console.log("after sorting the array", array);
    let newArr = [];
    while (array.length > 0) {
        let biggerNum = array.shift();
        // console.log(biggerNum);
        newArr.push(biggerNum);
        let smallerNum = array.pop();
        //console.log(smallerNum);
        newArr.push(smallerNum);
    }
    console.log(newArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);