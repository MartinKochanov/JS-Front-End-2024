function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    const infoSpanElement = document.querySelector('#info span.info');
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    let current = 'depot';
    let next = '';

    function depart() {
        fetch(`${baseUrl}/${current}`)
            .then(res => res.json())
            .then(data => {
                infoSpanElement.textContent = `Next stop ${data.name}`
                next = data.next;
                departButtonElement.setAttribute('disabled', 'disabled')
                arriveButtonElement.removeAttribute('disabled');
            })
            .catch(err => {
                infoSpanElement.textContent = 'Error'
            })

            return fetch(`${baseUrl}/${current}`);
    }

    async function arrive() {
      const result = await depart();
      const stop = await result.json();

      infoSpanElement.textContent = `Arriving at ${stop.name}`
      current = next;
      arriveButtonElement.setAttribute('disabled', 'disabled');
      departButtonElement.removeAttribute('disabled');
    
    }

    return {
        depart,
        arrive
    };
}

let result = solve();