function inventory(input) {
    let heroes = [];
    for (let element of input) {
        let info = element.split(' / ');
        let currHeroName = info[0];
        let currLevel = info[1];
        let currItems = info[2].split(' , ').join(', '); // splitvame masiva i razdelyame stringa posle sus zapetaya
        let currHero = {
            name: currHeroName,
            level: currLevel,
            items: currItems // ako sa ednakvi se dobavya samo kato klyuch i stoinost vmesto items:items
        };
        heroes.push(currHero);
    }
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);