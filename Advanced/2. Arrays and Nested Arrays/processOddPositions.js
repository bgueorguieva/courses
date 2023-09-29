function solve(nums) {
    const odd = nums.filter((x, i) => i % 2); // vtoriyat parametur i e index
    // nyama nujda ot !=0, zashtoto tezi, koito sa chetni shte vurne 0, koeto e falsey stoinost
    // i shte gi izklyuchi ot spisuka
    const doubled = odd.map(x => x * 2);

    doubled.reverse(); // ne pravi nov masiv, modificira

    console.log(doubled.join(' '));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

//OR
function solve(nums) {
    // ne polzvame promenlivite drugade, ne ni tryabvat
    console.log(nums
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));
    // pri chain-vane, praktikata e vsyaka nova operatsiya na nov red
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);