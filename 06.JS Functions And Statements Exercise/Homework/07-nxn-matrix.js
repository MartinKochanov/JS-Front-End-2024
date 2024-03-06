function solve(n) {

    const printRow = (num) => new Array(num).fill(num).join(' ');

    for (let i = 0; i < n; i++) {
        console.log(printRow(n));
    }

}

solve(7)