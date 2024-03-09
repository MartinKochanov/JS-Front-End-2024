function processChunks(chunks) {
    const targetThickness = chunks.shift();
    for (const chunk of chunks){
        console.log(`Processing chunk ${chunk} microns`);
        const operations = processCrystal(targetThickness, chunk);
        printOperations(operations);
        console.log(`Finished crystal ${targetThickness} microns`);
    }

    function printOperations(operations) {
        for (const operation of operations) {
            console.log(operation);
        }
    }

    function processCrystal(targetThickness, chunkThickness) {
    let operations = [];
    let currentThickness = chunkThickness;

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    let xRayCount = 0;

    while (currentThickness !== targetThickness) {
        if (currentThickness / 4 >= targetThickness) {
            cutCount++;
            currentThickness = Math.floor(currentThickness/4);
        } else if (currentThickness * 0.8 >= targetThickness) {
            lapCount++;
            currentThickness = Math.floor (currentThickness * 0.8);
        } else if (currentThickness - 20 >= targetThickness) {
            grindCount++;
            currentThickness = Math.floor(currentThickness -20);
        } else if (currentThickness - 2 >= targetThickness || currentThickness -1 >= targetThickness) {
            etchCount++;
            currentThickness = Math.floor(currentThickness - 2) ;
        } else if (currentThickness === targetThickness - 1) {
            xRayCount++;
            currentThickness += 1;
        }
    }

    if (cutCount > 0) {
        operations.push(`Cut x${cutCount}`);
        operations.push("Transporting and washing");
    }
    if (lapCount > 0) {
        operations.push(`Lap x${lapCount}`);
        operations.push("Transporting and washing");
    }
    if (grindCount > 0) {
        operations.push(`Grind x${grindCount}`);
        operations.push("Transporting and washing");
    }
    if (etchCount > 0) {
        operations.push(`Etch x${etchCount}`);
        operations.push("Transporting and washing");
    }
    if (xRayCount > 0) {
        operations.push(`X-ray x${xRayCount}`);
    }

    return operations;
}
}

const input = [1000, 4000, 8100];
processChunks(input);


