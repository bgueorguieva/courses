function personInfo(firstName, lastName, age) {
    let result = {
        firstName: firstName, // ulesnen sintax bez kavichki na putvoto
        lastName: lastName,
        age: age
    };
    return result;
}

//OR

function personInfo(firstName, lastName, age) {
    let result = {
        firstName, // ednovremenno stoinost i ime, naricha se kompozitsiya v obekt, nai-chesto sreshtano,ako pomenliva=stoinost
        lastName, // moje da se komnbinirat zapisite
        age
    };
    return result;
}
//OR
function personInfo(firstName, lastName, age) {
    let result = {};
    result.firstName = firstName;
    result.lastName = lastName;
    result.age = age;
}
console.log(personInfo("Peter",
    "Pan",
    "20"
));