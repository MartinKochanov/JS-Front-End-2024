function solve(num1, num2) {
    
    const factorial = (number) => {
        if(number < 0) {
            return;
        }
        if(number < 2) {
            return 1;
        }
        return number * factorial(number - 1);
    };

    let numbers = [num1, num2];

    let result = numbers.map(number => factorial(number)).reduce((first, second) => first / second);
    console.log(result.toFixed(2));
}

solve (5,2);
solve (6,2);
