function validate() {
    const emailInputElemet = document.getElementById('email');
    const matcher = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInputElemet.addEventListener('change', () => {
        if (!emailInputElemet.value.match(matcher)) {
            emailInputElemet.classList.add('error');
        } else {
            emailInputElemet.classList.remove('error');
        }
    })
}