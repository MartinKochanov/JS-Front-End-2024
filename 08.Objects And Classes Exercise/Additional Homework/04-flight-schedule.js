function solve(arrayOfArrays) {

    const flights = {}

    const desinationArray = arrayOfArrays[0];
    const changedStatusesArray = arrayOfArrays[1];
    const status = arrayOfArrays[2][0];

    desinationArray.forEach(line => {
        const [flightNumber, ...destinationStrings] = line.split(' ');
        let destination = destinationStrings.join(' ');
        flights[flightNumber] = { destination, status: 'Ready to fly' };
    })

    for (const line of changedStatusesArray) {
        const [flightNumber, status] = line.split(' ');

        for (const key in flights) {
            if(key === flightNumber) {
                flights[key].status = status;
            }
        }
    }

    for (const key in flights) {
        if(flights[key].status === status) {
            console.log(`{ Destination: '${flights[key].destination}', Status: '${flights[key].status}' }`);
        }
    }

}

solve([['WN269 Delaware',

    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']]);