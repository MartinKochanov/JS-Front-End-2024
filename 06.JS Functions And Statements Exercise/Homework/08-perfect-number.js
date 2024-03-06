function solve(number) {

    const getDivisors = (number) => {
        let divisors = [];
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    let divisorsSum = getDivisors(number).reduce((acc, number) => acc + number, 0)

    console.log(divisorsSum === number ? 'We have a perfect number!' : 'It\'s not so perfect.')
}

solve(6);
solve(28);
solve(1236498);
