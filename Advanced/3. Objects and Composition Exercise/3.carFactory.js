function solve(wantedCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        // sravnyavame dvigatelya i negovata mohstnost s jelanata mohstnost
        //ako e po-malko ili ravno na nashiya dvigatel, znachi vrushtame nai-malkiya ili nuleviya element
        carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
        // iskam tipa da e raven na jelaniya ot klienta
        // filter vinagi vrushta masiv
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize] // moje i s array fill
    }

}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})