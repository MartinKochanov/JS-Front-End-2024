function solve(a, b) {

    const sortedCharacters = getSortedCaracters(a, b);
    const start = sortedCharacters[0];
    const end = sortedCharacters[1];
    const result = getCharacterrsBetween(start, end);


    function getSortedCaracters(a, b) {
        const characters = [a, b];
        return characters.sort();
    }

    function getCharacterrsBetween(start, end) {
        let characters = [];
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i));
        }
        return characters;
    }


    console.log(result.join(' '));
}

solve('#', 'C')