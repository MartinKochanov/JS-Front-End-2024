function solve(wordsArray, string) {

    const words = wordsArray.split(', ')

    /**/  
    while (string.includes('*')) {
        words.forEach(word => {

            let censore = '*'.repeat(word.length);
            string = string.replace(censore, word)

        });
    }

    console.log(string);

}
solve('great, learning', 'softuni is ***** place for ******** new programming languages *****');