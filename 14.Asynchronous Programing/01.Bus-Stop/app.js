function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const inputElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const stopId = inputElement.value;

    fetch(`${baseUrl}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            stopNameElement.textContent = data.name;

            for (const bus in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
                busesElement.appendChild(liElement);
            }
        })
        .catch(err => {
            stopNameElement.textContent = 'Error'
        })
}
