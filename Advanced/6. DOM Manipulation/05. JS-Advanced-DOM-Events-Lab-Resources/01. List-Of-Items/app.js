function addItem() {
    // select input field and read its value
    const content = document.getElementById('newItemText').value;

    // create <li>element 
    const liElement = document.createElement('li');

    // assign input value to element text content 
    liElement.textContent = content;

    // select <ul> element and append new element 
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    // select input field and clear contents (value)
    document.getElementById('newItemText').value = '';

}

// sukrateno
function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    document.getElementById('items').appendChild(liElement);
    input.value = '';

}