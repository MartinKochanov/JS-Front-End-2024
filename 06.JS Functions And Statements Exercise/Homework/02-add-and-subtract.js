function solve(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const result = subtract(sum(a, b), c);

    console.log(result);
}
