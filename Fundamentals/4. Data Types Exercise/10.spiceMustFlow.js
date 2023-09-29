function spiceMustFlow(startingYield) {
    let spicesExtracted = 0;
    let dayCounter = 0;

    while (startingYield >= 100) {
        dayCounter++;
        spicesExtracted += startingYield - 26;
        startingYield -= 10;
    }

    console.log(dayCounter);
    if (dayCounter != 0) {
        console.log(spicesExtracted - 26);
    } else {
        console.log(spicesExtracted);
    }
}
spiceMustFlow(111);
spiceMustFlow(450);