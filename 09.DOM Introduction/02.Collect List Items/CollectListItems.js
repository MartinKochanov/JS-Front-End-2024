function extractText() {
    
    const listText = document.getElementById('items').textContent

    const textArea = document.getElementById('result');
    textArea.textContent = listText;
}

