function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainElement = document.getElementById('main')

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data)
                .forEach(user => {
                    mainElement.appendChild(createUserProfileElement(user));
                })
        })
        .catch(err => {
            console.log(err);
        })


    function createUserProfileElement(user) {

        const profileDivELement = document.createElement('div');
        profileDivELement.classList.add('profile')

        const profileImageElement = document.createElement('img')
        profileImageElement.src = './iconProfile2.png'
        profileImageElement.classList.add('userIcon');

        const lockLabelElement = document.createElement('label');
        lockLabelElement.textContent = 'Lock';
        const lockInputElement = document.createElement('input');
        lockInputElement.type = 'radio';
        lockInputElement.name = `userLocked${user._id}`;
        lockInputElement.value = 'lock'
        lockInputElement.setAttribute('checked', true);

        const unlockLabelElement = document.createElement('label');
        unlockLabelElement.textContent = 'Unlock';
        const unlockInputElement = document.createElement('input');
        unlockInputElement.type = 'radio';
        unlockInputElement.name = `userLocked${user._id}`;
        unlockInputElement.value = 'unlock'

        const brELement = document.createElement('br');
        const hrElement = document.createElement('hr');

        const usernameLabelElement = document.createElement('label');
        usernameLabelElement.textContent = 'Username';
        const usernameInputElement = document.createElement('input');
        usernameInputElement.type = 'text';
        usernameInputElement.name = 'userUsername';
        usernameInputElement.value = `${user.username}`
        usernameInputElement.setAttribute('disabled', 'disabled')
        usernameInputElement.setAttribute('readonly', 'readonly')

        const hidenFieldsDivElement = document.createElement('div');
        hidenFieldsDivElement.id = 'hiddenInfo';
        hidenFieldsDivElement.style.display = 'none'

        const secondHrElement = document.createElement('hr');

        const emailLabelElement = document.createElement('label');
        emailLabelElement.textContent = 'Email:';
        const emailInputElement = document.createElement('input');
        emailInputElement.type = 'email';
        emailInputElement.name = 'userEmail';
        emailInputElement.value = `${user.email}`
        emailInputElement.setAttribute('disabled', 'disabled');
        emailInputElement.setAttribute('readonly', 'readonly');

        const ageLabelElement = document.createElement('label');
        ageLabelElement.textContent = 'Age:';
        const ageInputElement = document.createElement('input');
        ageInputElement.type = 'text';
        ageInputElement.name = 'userAge';
        ageInputElement.value = `${user.age}`
        ageInputElement.setAttribute('disabled', 'disabled');
        ageInputElement.setAttribute('readonly', 'readonly');

        const showMoreButtonElement = document.createElement('button');
        showMoreButtonElement.textContent = 'Show more';

        hidenFieldsDivElement.appendChild(secondHrElement);
        hidenFieldsDivElement.appendChild(emailLabelElement);
        hidenFieldsDivElement.appendChild(emailInputElement);
        hidenFieldsDivElement.appendChild(ageLabelElement);
        hidenFieldsDivElement.appendChild(ageInputElement);

        profileDivELement.appendChild(profileImageElement);
        profileDivELement.appendChild(lockLabelElement);
        profileDivELement.appendChild(lockInputElement);
        profileDivELement.appendChild(unlockLabelElement);
        profileDivELement.appendChild(unlockInputElement);
        profileDivELement.appendChild(brELement);
        profileDivELement.appendChild(hrElement);
        profileDivELement.appendChild(usernameLabelElement);
        profileDivELement.appendChild(usernameInputElement);
        profileDivELement.appendChild(hidenFieldsDivElement);
        profileDivELement.appendChild(showMoreButtonElement);

        showMoreButtonElement.addEventListener('click', () => {
            const isUnlocked = profileDivELement.querySelector('input[type=radio][value=unlock]')
            if (isUnlocked.checked) {

                if (showMoreButtonElement.textContent.toLocaleLowerCase() === 'Show more'.toLocaleLowerCase()) {
                    showMoreButtonElement.textContent = 'Hide It';
                    hidenFieldsDivElement.style.display = 'block';
                }
                else if (showMoreButtonElement.textContent.toLocaleLowerCase() === 'Hide It'.toLocaleLowerCase()) {
                    showMoreButtonElement.textContent = 'Show more';
                    hidenFieldsDivElement.style.display = 'none';
                    console.log('working');
                }

            }
        })

        return profileDivELement;

    }

}