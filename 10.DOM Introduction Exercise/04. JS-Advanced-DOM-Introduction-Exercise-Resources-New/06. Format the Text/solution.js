function solve() {
    const textAreaElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    const text = textAreaElement.value;

    const result = text
        .split('.')
        .filter(sentance => !!sentance)
        .reduce((result, sentance, i) => {
            const resultIndex = Math.floor(i / 3);
            if (!result[resultIndex]) {
                result[resultIndex] = [];
            }
            result[resultIndex].push(sentance.trim());

            return result;
        }, [])
        .map(sentrences => `<p>${sentrences.join('. ')}.</p>`)
        .join('\n');

        outputElement.innerHTML = result;

}