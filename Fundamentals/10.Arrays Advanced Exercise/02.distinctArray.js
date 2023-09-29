function distinctArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let nextElement = nums[j];
            if (currentElement === nextElement) {
                nums.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log(nums.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

// OR

function distinctArray(nums) {
    let newArray = [];
    for (let element of nums) {
        if (!newArray.includes(element)) { // iskame samo unikalnite nepovtaryashtise elementi
            newArray.push(element);
        }
    }
    console.log(newArray.join(" "));
    //OR
    console.log(nums.map((element) => {

    }))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);