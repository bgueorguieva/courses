function party(input) {
    // *** tryabva da e s masiv, za da e ok da ima povtaryashti se stoinosti
    // create two collections
    let vipInvites = new Set(); // zashtoto ni interesuva samo stoinostta, unikalnite stoinosti samo
    let regularInvites = new Set();

    // for every line of input, until PARTY
    while (input[0] != 'PARTY') { // numleviya index se promenya sled vsqko iztrivane, zatova proveryavame po nego
        let guest = input.shift();
        // - if invitation is regular, add to regular list
        if (Number.isNaN(Number(guest[0]))) { // proveryavame dali quest[0] == NaN sled prevrushtane v chislo
            // - otherwise, add to VIP list
            regularInvites.add(guest);
        } else {
            vipInvites.add(guest);
        }
    }
    // for every remainig line
    for (let guest of input) {
        // - remove guest from their respective list
        vipInvites.delete(guest);
        regularInvites.delete(guest); // shte se iztrie samo ot spisuka, kudeto gi e imalo
    }
    // - print sum of guests that didn't come, starting from VIP guests
    console.log(vipInvites.size + regularInvites.size);
    // print unused VIP invites
    for (let guest of vipInvites) {
        console.log(guest);
    }
    // print unused regular invites
    for (let guest of regularInvites) {
        console.log(guest);
    }
}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('------');
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);