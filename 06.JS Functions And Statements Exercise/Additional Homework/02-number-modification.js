function solve(number) {

const calculateAverage = (num) => {
    let digits = num.toString().split('');
    let countDigits = digits.length;

    return digits
    .map(element => Number(element))
    .reduce((acc, value) => acc + value, 0) / countDigits;
}

const addDiggit = (num) => {
    let result = num.toString().split('');
    result.push('9');    
    
    return Number(result.join(''));
}
    
    let average = calculateAverage(number);

    while (average <= 5) {
        number = addDiggit(number);
        average = calculateAverage(number);
    }


    console.log(number);
}

solve(101);
solve(5835)