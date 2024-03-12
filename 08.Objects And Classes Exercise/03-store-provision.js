function solve(firstArray, secondArray) {

    const provisions = {};
    const arrayData = firstArray.concat(secondArray);
    
    fillStore(provisions, arrayData);
    printProvisions(provisions);
    

    function fillStore(provisions, arrayData) {
        while (arrayData.length > 0) {

            let key = arrayData.shift();
            let value = arrayData.shift();

            if (!provisions.hasOwnProperty(key)) {
                provisions[key] = Number(value);
            } else {
                provisions[key] = provisions[key] + Number(value);
            }
        }
    }

    function printProvisions(provisions) {
        for (const key in provisions) {
            console.log(`${key} -> ${provisions[key]} `);
        }
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);