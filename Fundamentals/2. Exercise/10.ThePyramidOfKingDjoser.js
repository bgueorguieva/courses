function pyramid(size, increment) {
    let stones = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 1;

    while (size >= 1) {
        if (size > 2) {
            if (steps % 5 === 0) {
                lapisLazuli += size * 4 - 4 * increment;
            } else {
                marble += size * 4 - 4 * increment;
            }
            steps++;
            stones += Math.pow(size - 2, 2) * increment;
        } else {
            gold += Math.pow(size, 2) * increment;
        }

        size -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stones)} \nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\n Gold required: ${gold}\nFinal pyramid height: ${Math.floor(steps * increment)}`);

}
pyramid(11, 1);