function timeToWalk(steps, footprint, speed) {
    let distanceMeters = steps * footprint;
    let speedMetersSec = speed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60)); // ostatuk
    let timeHrs = Math.floor(time / 3600); // ot sekundi pak v chasove

    console.log((timeHrs < 10 ? "0" : "") + timeHrs + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
timeToWalk(4000, 0.60, 5);