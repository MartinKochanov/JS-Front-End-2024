function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');

    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputElement.value;

    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    })

    newInputItemElement.appendChild(deleteLinkElement);

    itemsListElement.appendChild(newInputItemElement);


    inputElement.value = '';
}