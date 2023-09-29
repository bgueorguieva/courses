function storeProvision(availableStock, deliveredStock) {
    let storedProducts = {};

    for (let index = 0; index < availableStock.length; index += 2) { //prez dve stupki
        let currProduct = availableStock[index]; // index 0
        storedProducts[currProduct] = Number(availableStock[index + 1]); // index 1, taka vzimame chetni i nechetni indexi
    }
    for (let index = 0; index < deliveredStock.length; index += 2) {
        let currProduct = deliveredStock[index];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(deliveredStock[index + 1]);
    }
    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
    // or for (let product of Object.keys(storedProducts))
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);