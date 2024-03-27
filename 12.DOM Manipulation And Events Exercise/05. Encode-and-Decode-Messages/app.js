function encodeAndDecodeMessages() {
    const encodeButton = document.querySelector('#main div:first-of-type button');
    const encodeTextarea = document.querySelector('#main div:first-of-type textarea');
    const decodeButton = document.querySelector('#main div:last-of-type button')
    const decodeTextarea = document.querySelector('#main div:last-of-type textarea')

    encodeButton.addEventListener('click', (e) => {
        const text = encodeTextarea.value;
        const encodedText = text.split('').map(char => char = String.fromCharCode(char.charCodeAt() + 1)).join('');
        decodeTextarea.value = encodedText;
        encodeTextarea.value = ''
    })

    decodeButton.addEventListener('click', (e) => {
        const encodedText = decodeTextarea.value;
        const decodedText = encodedText.split('').map(char => char = String.fromCharCode(char.charCodeAt() - 1)).join('') 
        decodeTextarea.value = decodedText;
    })
}