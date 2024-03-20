function toggle() {
    const buttonElement = document.querySelector('.button');
    const extraTextElement = document.getElementById('extra');

    if (buttonElement.textContent.toLocaleLowerCase() === 'more') {
        buttonElement.textContent = 'Less';
        extraTextElement.style.display = 'block';
    } else if (buttonElement.textContent.toLocaleLowerCase() === 'less') {
        buttonElement.textContent = 'More';
        extraTextElement.style.display = 'none';
    }
}