function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    const locationElement = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current')
    const upcomingElement = document.getElementById('upcoming');

    const wheaterSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    submitButton.addEventListener('click', async () => {
        const locationResponse = await fetch(`${baseUrl}/locations`);
        const locationData = await locationResponse.json();


        const { code } = locationData.find(location => location.name === locationElement.value);

        const todayResponse = await fetch(`${baseUrl}/today/${code}`);
        const today = await todayResponse.json()
        const upcomingResponse = await fetch(`${baseUrl}/upcoming/${code}`)
        const upcoming = await upcomingResponse.json();

        forecastElement.style.display = 'block'

        const symbolSpanElement = document.createElement('span');
        symbolSpanElement.classList.add('condition');
        symbolSpanElement.classList.add('symbol');
        symbolSpanElement.textContent = wheaterSymbol[today.forecast.condition]

        const spanWrapper = document.createElement('span');
        spanWrapper.classList.add('condition');

        const locationNameSpan = createForecastDataSpanElementWithTextContent(today.name);
        const highLowSpan = createForecastDataSpanElementWithTextContent(`${today.forecast.high}/${today.forecast.low}`);
        const conditionSpan = createForecastDataSpanElementWithTextContent(today.forecast.condition);

        spanWrapper.append(...[locationNameSpan, highLowSpan, conditionSpan]);
        currentElement.append(...[symbolSpanElement, spanWrapper]);

        const upcomingDaysForecastInfoSpanWrapper = document.createElement('div');
        upcomingDaysForecastInfoSpanWrapper.classList.add('forecast-info')

        for (const upcomingDayForecast of upcoming.forecast) {
            const upcomingForecastSpanWrapper = document.createElement('span');
            upcomingForecastSpanWrapper.classList.add('upcoming');

            const symbolSpanElement = document.createElement('span');
            symbolSpanElement.classList.add('symbol');
            symbolSpanElement.textContent = wheaterSymbol[upcomingDayForecast.condition];

            const highLowSpanElement = createForecastDataSpanElementWithTextContent(`${upcomingDayForecast.high}/${upcomingDayForecast.low}`);
            const conditionSpanElement = createForecastDataSpanElementWithTextContent(upcomingDayForecast.condition);

            upcomingForecastSpanWrapper.append(...[symbolSpanElement, highLowSpanElement, conditionSpanElement])
            upcomingDaysForecastInfoSpanWrapper.appendChild(upcomingForecastSpanWrapper);
        }

        upcomingElement.appendChild(upcomingDaysForecastInfoSpanWrapper);
    })
}


function createForecastDataSpanElementWithTextContent(text) {
    const newSpanElement = document.createElement('span');
    newSpanElement.classList.add('forecast-data');
    newSpanElement.textContent = text;

    return newSpanElement;
}

attachEvents();