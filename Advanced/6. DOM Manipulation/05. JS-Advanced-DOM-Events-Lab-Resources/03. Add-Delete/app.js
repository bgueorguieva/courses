function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    //create [Delete] anchor
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

}
// za da raboti na cuknatiya buton, ne na vsichki
function onDelete(e) {
    e.target.parentElement.remove(); // event.target e za da razberem kude e cuknal potrebitelya
}