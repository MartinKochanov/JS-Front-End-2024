function main(inputData) {
    const arrays = parseInput(inputData);
    const uniqueArrays = storeUniqueArrays(arrays);
    printOutput(uniqueArrays);

    function printOutput(uniqueArrays) {
        uniqueArrays.forEach(array => {
            console.log(`[${array.join(', ')}]`);
        });
    }
    function storeUniqueArrays(arrays) {
        const uniqueArrays = new Map();
        arrays.forEach(array => {
            const sortedArray = array.slice().sort((a, b) => b - a); // Sort the array in descending order
            const key = JSON.stringify(sortedArray); // Convert the sorted array to a string for the map key
            uniqueArrays.set(key, sortedArray);
        });
        return Array.from(uniqueArrays.values()).sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length; // Sort by length
            } else {
                return arrays.indexOf(a) - arrays.indexOf(b); // Maintain the original order if lengths are equal
            }
        });
    }
    function parseInput(inputData) {
        return inputData.map(JSON.parse);
    }

}

main([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])

main(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"])