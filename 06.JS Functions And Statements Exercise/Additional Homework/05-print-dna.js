function solve(number) {
    let repeats = 1;
    let patternNumber = 1;

    const groupedSequence = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let result = [];

    const updateResult = (result, symbols) => {
        if (patternNumber % 3 === 0) {
            result.push(`${symbols.charAt(0)}----${symbols.charAt(1)}`)
            patternNumber++;
        } else if (patternNumber % 2 === 0) {
            result.push(`*${symbols.charAt(0)}--${symbols.charAt(1)}*`)
            patternNumber++;
        } else {

            if (patternNumber > 1) {
                patternNumber = 1;
            }

            result.push(`**${symbols}**`)

            patternNumber++;

        }
        return result;
    }

    
    while (repeats <= number) {

        let symbols = groupedSequence.shift();
        groupedSequence.push(symbols);
        result = updateResult(result, symbols);
        repeats++;
    }

    printResult(result);

}

function printResult(result) {
    for (const pattern of result) {
        console.log(pattern);
    }
}

console.log('First input');
console.log('-------------');
solve(4);
console.log('');
console.log('Second input');
console.log('-------------');
solve(10);