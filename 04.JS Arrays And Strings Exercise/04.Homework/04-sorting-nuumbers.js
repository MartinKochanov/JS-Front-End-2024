function solve(numbers) {
    const sortedNumbers = numbers.sort((a,b) => a-b);
    const result = [];

    while (numbers.length > 0) {

        let firstNum = numbers.shift();
        let lastNum = numbers.pop();
        
        result.push(firstNum);
        
        if (lastNum) {
            result.push(lastNum);
        }

    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]));