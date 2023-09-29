function solve(arr, step) {
    //for index+=step
    //arr.filter - po-dobre za uprajnenieto
    return arr.filter((element, index) => index % step == 0);
    // ako indeksa se deli na stupkata celochisleno, znachi sme preskochili dostatuchno

}

solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
)