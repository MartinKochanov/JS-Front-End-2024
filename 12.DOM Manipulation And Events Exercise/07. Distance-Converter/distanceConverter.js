function attachEventsListeners() {

    const convertButton = document.getElementById('convert');
    const inputDistanceElement = document.getElementById('inputDistance');
    const inputUnitElement = document.getElementById('inputUnits');
    const outputUnitElement = document.getElementById('outputUnits');
    const outputDistanceElement = document.getElementById('outputDistance');

    const toMeters = (inputUnit, distance) => {
        switch (inputUnit) {
            case 'km':
                return distance * 1000;
            case 'm':
                return distance;
            case 'cm':
                return distance * 0.01;
            case 'mm':
                return distance * 0.001;
            case 'mi':
                return distance * 1609.34;
            case 'yrd':
                return distance * 0.9144;
            case 'ft':
                return distance * 0.3048;
            case 'in':
                return distance * 0.0254;

        }
    }
    const converters = {
        km: (meters) => { return meters / 1000 },
        m: (meters) => { return meters },
        cm: (meters) => { return meters * 100 },
        mm: (meters) => { return meters * 1000 },
        mi: (meters) => { return meters / 1609.34 },
        yrd: (meters) => { return meters / 0.9144 },
        ft: (meters) => { return meters / 0.3048 },
        in: (meters) => { return meters / 0.0254 },
    };

    convertButton.addEventListener('click', (e) => {
        const inputUnit = inputUnitElement.value;
        const distance = Number(inputDistanceElement.value)
        const meters = toMeters(inputUnit, distance);
        const result = converters[outputUnitElement.value](meters);
        outputDistanceElement.value = result;
    })
}