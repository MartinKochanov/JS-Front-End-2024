function focused() {
     const inputTextElements = document.querySelectorAll('input[type="text"]')

     for (const input of inputTextElements) {
        input.addEventListener('focus', () =>{
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        })
     }
}