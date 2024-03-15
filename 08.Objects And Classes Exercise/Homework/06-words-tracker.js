function solve(arrayData) {
    const wordsWithOccurrences = {};
    const searchedWords = arrayData.shift().split(' ');


    for (const word of searchedWords) {
        wordsWithOccurrences[word] = 0;
    }

    for (const word of arrayData) {
        if (wordsWithOccurrences.hasOwnProperty(word)) {
            wordsWithOccurrences[word] = wordsWithOccurrences[word] + 1;
        }
    }

    Object
    .entries(wordsWithOccurrences)
    .sort((a,b) => b[1] - a[1])
    .forEach(word => console.log(`${word[0]} - ${word[1]}`));
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('');
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'])