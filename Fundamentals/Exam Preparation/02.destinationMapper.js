function solve(input) {
    let destinations = input;
    let pattern = /([=|\/])(?<city>[A-Z][A-Za-z]{2,})\1/gm;

    let match = pattern.exec(destinations);
    let travelPoints = 0;
    let allDestinations = [];

    while (match != null) {
        allDestinations.push(match.groups['city']);
        travelPoints += match.groups['city'].length;
        match = pattern.exec(input);
    }
    console.log(`Destinations: ${allDestinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");