function colorize() {
    // TODO
    const rows = document.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i += 2) { // stupkata e 2 za chetni, no zapochvame sled th
        rows[i].style.background = 'teal';
    }
}

//OR
function colorize() {
    // TODO
    const rows = document.querySelectorAll('tr:nth-child(2n)'); //2n hvashta vseki vtori OR (even), ednakvi sa

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.background = 'teal';
    }
}