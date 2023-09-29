function storage(input) {
    let result = new Map();
    // for every line of input
    for (let line of input) {
        // - parse
        let [product, qty] = line.split(' ');
        qty = Number(qty);

        // - add new quantity to existing quantity
        if (result.has(product)) {
            let existing = result.get(product);
            result.set(product, qty + existing);
        } else {
            result.set(product, qty);
        }
        /* or a 'happy path'
        let existing = 0;
         if (result.has(product)) {
            existing = result.get(product);
        }
         result.set(product, qty + existing);

         or

         if(!result.has(product)){
             result.set(product,0);
         }

         let existing = result.get(product);
         result.set(product, qty + existing);

         */
    }
    for (let [product, qty] of result) { // za Map vutreshto se vika .entries()
        console.log(product, '->', qty);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);