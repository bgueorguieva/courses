function solve(input) {
    let piecesCount = Number(input.shift());
    let pieces = {};

    //add pieces in collection
    for (let i = 0; i < piecesCount; i++) {
        // - create piece
        let pieceData = input.shift().split('|');
        let [pieceName, composer, key] = pieceData;
        pieces[pieceName] = {
            composer,
            key,
        };
    }
    // repeat for remaining input until Stop
    while (input[0] !== 'Stop') {
        let tokens = input.shift().split('|');
        let [command, pieceName, composer, key] = tokens;

        let piece = pieces[pieceName];

        if (command === 'Add') {
            if (pieces.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                pieces[pieceName] = {
                    composer,
                    key,
                };
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(pieceName)) {
                delete pieces[pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            key = tokens[2];
            if (pieces.hasOwnProperty(pieceName)) {
                piece.key = key;
                console.log(`Changed the key of ${pieceName} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }
    //print all pieces
    for (let pieceData of Object.entries(pieces)) {
        let piece = pieceData[0];
        let pieceInfo = pieceData[1];
        console.log(`${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);

    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);