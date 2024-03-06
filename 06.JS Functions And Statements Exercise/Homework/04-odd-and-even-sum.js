function solve(number) {
    const evenDigitsSum = calculateDigitSum(number, num => num % 2 === 0);
    const oddDigitsSum = calculateDigitSum(number, num => num % 2 !== 0);

    console.log(`Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`);

    function calculateDigitSum(number, filter) {
        const digits = number
            .toString()
            .split('')
            .map(Number)
            .filter(filter);
    
        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        return sum;
    }
}


solve(1000435);
solve(3495892137259234)




