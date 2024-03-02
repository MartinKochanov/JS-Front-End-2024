function solve(string) {
    const pattern = /#[a-zA-Z]+/g;

    const specialWords = string.match(pattern).map(word => word = word.substring(1)).join('\n');
    console.log(specialWords);
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')