function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day); // gotov JS obekt, zashtoto mesecite sa ot 0 do 11 
    date.setDate(date.getDate() - 1); // mojem da promenim denyat ot meseca, a s getDate vzimame dneshniya den
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
previousDay(2016, 9, 30);