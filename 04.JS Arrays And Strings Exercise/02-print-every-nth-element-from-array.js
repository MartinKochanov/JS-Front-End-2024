function solve(array, n) {

    result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array[i])
    }
    return result;
}

function solve1(numbers, step) {
    const result = numbers.filter((element, index) => index % step === 0);
    return result;
}
