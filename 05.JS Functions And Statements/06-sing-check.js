function solve(num1, num2, num3) {
    let negatives = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            negatives++;
        }
    }

    console.log(negatives % 2 === 0 ? 'Positive' : 'Negative');
}

solve(5,12,-15)