function information(name, age, grade) { // poluchavame po poveche parametri, a ne elementi ot masiv a,b,c /input[a,b,c]
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
information('John', 15, 5.54678);
information('Steve', 16, 2.1426);
information('Marry', 12, 6.00);

//Moje da se reshi i s
function information(name, age, grade) {
    console.log(`Name:`, name, `Age:`, age, `Grade:`, grade.toFixed(2));
}
information('John', 15, 5.54678);
information('Steve', 16, 2.1426);
information('Marry', 12, 6.00);