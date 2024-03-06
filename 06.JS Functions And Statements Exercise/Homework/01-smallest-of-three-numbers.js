function solve(a, b, c) {
    const result = min([a, b, c]);

    console.log(result);

    function min(numbers) {

        let minNumber = Number.MAX_SAFE_INTEGER;
    
        for (const number of numbers) {
            if (minNumber > number) {
                minNumber = number;
            }
        }
    
        return minNumber;
    }
}

solve(1, 2, 3);