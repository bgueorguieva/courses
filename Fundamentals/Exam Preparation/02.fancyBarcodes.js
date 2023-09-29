function solve(input) {
    let barcodesCount = Number(input.shift());

    for (let i = 0; i < barcodesCount; i++) {
        let pattern = /@#+(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;

        let barcode = input.shift();
        let match = pattern.exec(barcode);

        if (match != null) {
            let digitsPattern = /\d/g;
            let prodGroup = '';
            let allDigits = barcode.match(digitsPattern);
            if (allDigits == null) {
                prodGroup = "00";
            } else {
                prodGroup = allDigits.join('');
            }
            console.log(`Product group: ${prodGroup}`);
        } else {
            console.log('Invalid barcode');
        }
        match = pattern.exec(barcode);
    }
}

solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);