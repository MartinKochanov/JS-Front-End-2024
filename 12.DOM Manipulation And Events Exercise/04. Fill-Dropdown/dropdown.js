function addItem() {
    const inputTextElement = document.getElementById('newItemText')
    const inputValueElement = document.getElementById('newItemValue')
    const menuElement = document.getElementById('menu')

    const optionElement = document.createElement('option')
    optionElement.value = inputValueElement.value
    optionElement.textContent = inputTextElement.value
    menuElement.appendChild(optionElement)


    inputTextElement.value = ''
    inputValueElement.value = ''
}