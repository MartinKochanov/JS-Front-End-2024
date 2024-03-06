function solve(number) {

    const fillTheBar = (number) => {
        let bar = new Array(10).fill('.');

        for (let i = 0; i < number / 10; i++) {
            bar[i] = '%';
        }

        return bar;
    }


    let bar = fillTheBar(number);

    console.log(bar.filter(element => element === '%').length < 10 ?
        `${number}% [${bar.join('')}]\nStill loading...` : `${number}% Complete!\n[${bar.join('')}]`);
}

solve(50);
solve(30);
solve(100);
