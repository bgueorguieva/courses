function sumTable() {
    // select all data rows (exclude first and last row)
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1); // mahame purvi i posleden red ot masiva
    let sum = 0;
    // for each row
    // -- select last column
    // -- add content to sum
    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        // lastElementChild ni dava posledniya element ot izbraniq parent, ima i firstelementChild
        sum += value;
    }
    // display sum in total row
    document.getElementById('sum').textContent += sum; // stringovata operaciya na domavqne
}