function amazing(num) {
    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }

    let special = false;

    let resultAsString = String(result);
    for (let i = 0; i < resultAsString; i++) {
        if (resultAsString[i] == '9') {
            special = true;
        }
    }
    console.log(`${num} Amazing? ${special ? 'True' : 'False'}`); // ternaren operator s dve opcii samo
}
amazing(1233);
amazing(999);
amazing(7814);
amazing(982);