function solve(numbers) {

    for (const number of numbers) {
        console.log(chekIfPalindrom(number));
    }

    function chekIfPalindrom(number) {
        return number.toString() === number.toString().split('').reverse().join('');
    }
}

solve([123, 323, 421, 121]);
solve([32,2,232,1010]);

