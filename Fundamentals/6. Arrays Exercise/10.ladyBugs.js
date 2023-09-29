function ladyBugs(input) {
    let n = input.shift(); // vadim purvoto chislo ot masiv
    let field = (new Array(n)).fill(0); // suzdavame now masiv s opredelen broi prazni elementa, a fill go pulni s 0
    // parse field
    let ladyBugIndexes = input.shift().split(' '); //  s dvata shifta se vadyat purvite 2 elementa ot masiva,
    //a split shte nareje masiva s positsiite na kalinki
    for (let index of ladyBugIndexes) { // slagame string v rpomenlivata i posle go pravim na chislo
        index = Number(index);
        if (field[index] != undefined) { // OR index >= 0 && index < field.length
            field[index] = 1;
        }
    }

    for (let command of input) {
        // parse command 
        // - if direction is right -> add offset to current index
        // - otherwise -> subtract from current index
        let tokens = command.split(' ');
        let startingIndex = Number(tokens[0]);
        if (field[startingIndex] == 1) {
            let currentIndex = startingIndex;
            let direction = tokens[1];
            let offset = Number(tokens[2]);

            if (direction == 'left') {
                offset += -1;
            }
            // repeat fly operation until 
            // - found empty cell OR
            // - end of field 
            while (currentIndex >= 0 && currentIndex < n && field[currentIndex] == 1) {
                // ako nyama kalinka na indexa -> ne pravim nishto;
                currentIndex += offset;
            }
            field[startingIndex] = 0;

            if (currentIndex >= 0 && currentIndex < n) {
                field[currentIndex] == 1;
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3, '0 1 2'], '0 right 1', '1 right 1', '2 right 1');