function greatestDivisor(a, b) {
    if (b) { // ako ima nyqkakva stoinost v b
        return greatestDivisor(b, a % b);
    } else { // kogato b = 0
        console.log(a);
    }
}
greatestDivisor(2154, 458);