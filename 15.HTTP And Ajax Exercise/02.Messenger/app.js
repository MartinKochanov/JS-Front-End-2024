function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const textAreaMessagesElement = document.getElementById('messages');
    const nameInputElement = document.querySelector('input[type=text][name=author]');
    const messageInputElement = document.querySelector('input[type=text][name=content]');
    const sendButton = document.getElementById('submit')
    const refreshButton = document.getElementById('refresh')

    refreshButton.addEventListener('click', async () => {
        textAreaMessagesElement.textContent = '';

        try {
            const respons = await fetch(baseUrl);
            const data = await respons.json()
            let allMessages = '';
            Object.values(data)
                .forEach(message => {
                    allMessages += `${message.author}: ${message.content}\n`
                })
            textAreaMessagesElement.textContent = allMessages.trim();
        } catch (err) {
            console.log(err);
        }
    });

    sendButton.addEventListener('click', async () => {
        const author = nameInputElement.value;
        const content = messageInputElement.value;

        const result = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author,
                content,
            })
        });

        const message = await result.json();
        textAreaMessagesElement.textContent += `${message.author}: ${message.content}`

        nameInputElement.value = '';
        messageInputElement.value = '';

    })

}

attachEvents();