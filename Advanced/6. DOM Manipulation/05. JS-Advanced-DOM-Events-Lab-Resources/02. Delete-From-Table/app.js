function deleteByEmail() {
    // select input field and read value
    const value = document.querySelector('input[name="email"]').value;

    // repeat for every table row
    // -- select second column
    // -- compare text content with input value
    // -- if they are equal - remove current row
    const rows = Array.from(document.querySelectorAll('tbody tr')); // vzimame vsichki tr ot tbody, za da propusne th, i go prevrushtame v masiv

    let found = false;

    for (let row of rows) {
        if (row.children[1].textContent == value) { // vzimame ot vtorata kolona sudurjanie
            const parent = row.parentNode; // parentNode v sluchaya e = na parentElement
            parent.removeChild(row);
            found = true; // ako nyama suvpadenie shte minem prez vsichki redove
        }
    }

    // display result
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.';
}