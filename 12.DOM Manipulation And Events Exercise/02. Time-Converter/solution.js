function attachEventsListeners() {
    const daysInputElement = document.getElementById('days')
    const hoursInputElement = document.getElementById('hours')
    const minutesInputElement = document.getElementById('minutes')
    const secondsInputElement = document.getElementById('seconds')
    const convertButtonElements = document.querySelectorAll('div input[type="button"]')


    for (const button of convertButtonElements) {
        switch (button.getAttribute('id')) {
            case 'daysBtn':
                button.addEventListener('click', () => {
                    const days = Number(daysInputElement.value);
                    hoursInputElement.value = days * 24;
                    minutesInputElement.value = days * 1440;
                    secondsInputElement.value = days * 86400;

                })
                break;
            case 'hoursBtn':
                button.addEventListener('click', () => {
                    const hours = Number(hoursInputElement.value);
                    daysInputElement.value = hours / 24;
                    minutesInputElement.value = hours * 60;
                    secondsInputElement.value = hours * 3600;

                })
                break;
            case 'minutesBtn':
                button.addEventListener('click', () => {
                    const minutes = minutesInputElement.value;
                    daysInputElement.value = minutes / 1440;
                    hoursInputElement.value = minutes / 60;
                    secondsInputElement.value = minutes * 60;

                })
                break;
            case 'secondsBtn':
                button.addEventListener('click', () =>{
                    const seconds = secondsInputElement.value;
                    daysInputElement.value = seconds / 86400
                     hoursInputElement.value = seconds / 3600;
                     minutesInputElement.value = seconds / 60;
                })
                break;
        }
    }
}