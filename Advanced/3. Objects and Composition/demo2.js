const myMap = {
    'John': '+1-555-7652',
    'Mary': '+1-555-9713',
    'Bob': '+1-555-2249',
};

for (const key in myMap) {
    console.log(key);
    console.log(myMap[key]);

    //OR
    console.log(key,myMap[key]); // za na edin red
}

//ot 40 min