function solve(n, numbers) {

    const result = numbers
        .slice(0, n)
        .reverse()
        .join(' ');
    console.log(result);
}

solve(3, [10, 20, 30, 40, 50])