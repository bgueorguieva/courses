function towns(list){
    // iterate input 
    // parse each element
    // store result

    const result = {};

    for(const town of list) {
        const tokens = town.split(' <-> '); // tova se naricha tokenizatsiya
        const name = tokens[0];
        let pop = Number(tokens[1]);

// po-kratuk i strukturiran zapis
// if (result[name] != undefined) {
//  pop += result[name];   toest ako go ima veche tozi name, dobavyame kum sushtestvuvashtata populaciq novite hora
// }

        if(result[name] == undefined){
            result[name] = pop; // suzdavame nov klyuch kum obekta s dadenata stoinost
        } else {
            result[name] += pop;
        }
    }

    // print result
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }

    // OR
    for (let [name,pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}

towns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);