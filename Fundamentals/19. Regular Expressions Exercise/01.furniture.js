function furniture(input) {
    let totalSum = 0;
    console.log("Bought furniture:");

    for (let line of input) {
        if (line === "Purchase") {
            break;
        }
        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/; //(.\d+)?) moje da q ima, moje i da q nqma zaradi ?
        // \s e za da se match=va i prazno prostranstvo, ako ima space mejdu dumite na furtniture item
        let result = regex.exec(line);
        if (result !== null) {
            totalSum += +result.groups.price * result.groups.quantity; // + prevrushta v chislo!
            console.log(result.groups.name);
        }
        //console.log(result.groups.price); => dostupvane na grupa
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);