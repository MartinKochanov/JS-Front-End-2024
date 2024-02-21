
// First way

function largestNumber(num1, num2, num3) {
    console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);
}

// Second way - implementing my own function

function largestNumber1(num1, num2, num3) {
    let max = Number.MIN_SAFE_INTEGER;
    let numbers = [num1, num2, num3];

    numbers.forEach(number => {
        if (number > max) {
            max = number;
        }
    })

    console.log(`The largest number is ${max}.`);
}



largestNumber(-3, -5, -22.5);
largestNumber1(-3, -5, -22.5);
