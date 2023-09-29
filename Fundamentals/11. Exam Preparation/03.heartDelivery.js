function heartDelivery(input) {
    // parse input
    let houses = input.shift().split('@').map(Number);
    let cupid = 0; // dostavya chak sle dpurviya si skok

    // until 'Love!' parse and execute command
    while (input[0] != 'Love!') {
        // - get jump size
        let tokens = input.shift().split(' ');
        let jump = Number(tokens[1]);

        // - apply jump
        cupid += jump;

        // - if Cupid is outside the hood, eturn him to first house (index 0)
        if (cupid >= houses.length) {
            cupid = 0;
        }
        // - check if more hearts are needed
        if (houses[cupid] == 0) {
            console.log(`Place ${cupid} already had Valentine's day.`);
            //continue; //preskacha ostanaliya kod i vrushta pak gore
        } else {
            houses[cupid] -= 2;
            if (houses[cupid] == 0) {
                console.log(`Place ${cupid} has Valentine's day.`);
            }
        }
        // - otherwise, deliver hearts to current house
        // if current house has enough hearts, print message
    }
    // print result
    let missed = 0;
    for (let house of houses) {
        if (house > 0) { // broya kushti, v koito surcata sa poveche ot 0 i ne e dostavil tam dostatuchno
            missed++;
        }
    }
    console.log(`Cupid's last position was ${cupid}.`);
    if (missed > 0) {
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log("Mission was successful.");
    }

}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);