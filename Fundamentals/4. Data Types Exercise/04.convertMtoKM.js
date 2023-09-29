function metersToKm(meters) {
    let converted = meters / 1000; // kolko sa v kilometri

    console.log(converted.toFixed(2));
    //console.log((meters / 1000).toFixed(2));
}
metersToKm(1852);
metersToKm(798);