function solve(arr) {
    arr.sort(twoCriteriaSort);
    return arr.join('\n');

    // pri dva kriterii i funktsionalnost, koyato ne e pryao svurzana sas zadachata e dobre da e iznesena kato
    // otdelna funktsiya
    function twoCriteriaSort(current, next) {
        // sort
        if (current.length === next.length) {
            //implement second criteria
            return current.localeCompare(next);
        }
        // nyama nujda ot else zaradi return

        return current.length - next.length; // za alphabetical order, current zamestva "a", a next "b" pri sort
    }
}
solve(['alpha',
    'beta',
    'gamma'
])