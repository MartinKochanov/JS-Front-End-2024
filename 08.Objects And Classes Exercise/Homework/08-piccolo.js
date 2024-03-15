function solve(arrayData) {
    const parkingLot = {};

    while (arrayData.length > 0) {
        const [direction, carNumber] = arrayData.shift().split(', ');

        if (direction === 'IN') {
            parkingLot[carNumber] = direction;
        } else if (direction === 'OUT') {
            delete parkingLot[carNumber];
        }
    }


    const keys = Object.keys(parkingLot);

    if (keys.length <= 0) {
        console.log('Parking Lot is Empty');
    } else {
        keys
            .sort((a, b) => a.localeCompare(b))
            .forEach(key => console.log(key))
    }


}

solve([
    'IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT',
    'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA',
    'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'
]);

console.log('');

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])