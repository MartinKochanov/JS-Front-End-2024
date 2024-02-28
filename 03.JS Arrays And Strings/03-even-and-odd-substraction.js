function solve1(numbers) {

    let sumEven = numbers.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
    let sumOdd = numbers.filter(num => num % 2 !== 0).reduce((a,b) => a + b, 0);

    console.log(sumEven - sumOdd);
}

function solve(numbers) {
    let result = numbers.reduce((sum,num) => num % 2 === 0 ? sum + num : sum - num, 0);
    console.log(result);
}

solve([1, 2, 3, 4, 5, 6])