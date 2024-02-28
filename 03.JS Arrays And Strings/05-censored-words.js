
function solve(text, word) {
    const result = text.replaceAll(word, '*'.repeat(word.length))
    console.log(result);
}

function solve1(string, word) {
    
    while (string.includes(word)) {
        string = string.replace(word, '*'.repeat(word.length));
    }

    console.log(string);
}


function solve2(text, word) {

    const pattern = new RegExp(word, 'g');
    const result = text.replace(pattern, '*'.repeat(word.length))

    console.log(result);
}



solve('A small sentence with some words small','small');