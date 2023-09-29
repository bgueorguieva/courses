function solve(arr) {
    let obj = {};
    // key: { product : { town, price }}
    for (let index = 0; index < arr.length; index++) {
        const info = arr[index].split(' | ');
        const [town, product] = info;
        const price = Number(info[2]);

        if (!obj[product]) { // ako nyqmam takuv produkt wse oshte suzdaden i vkaran v obekta shte vurne undefined (falsey)
            // moje i s proverka dali tozi obekt ima property s tova ime s !obj.hasOwnProperty(product)
            obj[product] = { town, price }; // tova e realno town: town, price: price
        } else {
            if (price < obj[product].price) {
                //obj e obekt, product e klyuch v nego, no stoinostta v product e sushto obekt i taka se dostupva stoinost v nestnatiya obekt
                // ako tekushtata suma e po-niska ot tazi, koqto imam, trqbva da prezapisha moq obekt
                obj[product] = { town, price };
                // toest ako e po-niska slagam noviya grad i novata cena
            }
        }
    }
    let productNames = Object.keys(obj);
    for (let index = 0; index < productNames.length; index++) {
        let productName = productNames[index];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
        
    }

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)