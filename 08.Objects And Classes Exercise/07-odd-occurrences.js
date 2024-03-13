function solve(string) {
    const occurrences = {};
    const oddOccurrences = [];

    string = string.toLowerCase();

    const words = string.split(' ');

    for (const word of words) {
        if(!occurrences.hasOwnProperty(word)) {
            occurrences[word] = 1
        } else {
            occurrences[word] += 1;
        }
    }

    for (const key in occurrences) {
        if(occurrences[key] % 2 !== 0) {
            oddOccurrences.push(key);
        }
    }

    console.log(oddOccurrences.join(' '));
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS SWEET is Soft CAKE sweet Food')