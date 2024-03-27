function solve() {
    const inputTextareaElement = document.querySelector('#exercise textarea:first-of-type');
    const generateButtonElement = document.querySelector('#exercise button:first-of-type')
    const tBodyElement = document.querySelector('table tbody');
    const outputTextElement = document.querySelector('#exercise textarea:last-of-type');
    const buyButtonElement = document.querySelector('#exercise button:last-of-type')


    generateButtonElement.addEventListener('click', () => {
        const furnitures = JSON.parse(inputTextareaElement.value);

        for (const furniture of furnitures) {

            const newTrElement = document.createElement('tr');
            const tdImageElement = document.createElement('td');
            const imageElement = document.createElement('img');

            imageElement.src = furniture.img;
            tdImageElement.appendChild(imageElement);

            const tdNameElement = document.createElement('td');
            const namePElement = document.createElement('p');

            namePElement.textContent = furniture.name;
            tdNameElement.appendChild(namePElement);

            const tdPriceElement = document.createElement('td');
            const pricePElement = document.createElement('p');

            pricePElement.textContent = furniture.price;
            tdPriceElement.appendChild(pricePElement);

            const tdDecorationFactorElement = document.createElement('td');
            const decorationFactorPElement = document.createElement('p');

            decorationFactorPElement.textContent = furniture.decFactor;
            tdDecorationFactorElement.appendChild(decorationFactorPElement);

            const tdInputElement = document.createElement('td');
            const checkboxElement = document.createElement('input');

            checkboxElement.type = 'checkbox'
            tdInputElement.appendChild(checkboxElement);

            newTrElement.appendChild(tdImageElement);
            newTrElement.appendChild(tdNameElement)
            newTrElement.appendChild(tdPriceElement);
            newTrElement.appendChild(tdDecorationFactorElement);
            newTrElement.appendChild(tdInputElement);

            tBodyElement.appendChild(newTrElement);
           
        }
    });

    buyButtonElement.addEventListener('click', (e) => {

        let totalPrice = 0;
        let totalDecorationFactor = 0;
        let names = [];

        Array.from(tBodyElement.children).forEach(furnitureElement => {
            const markElement = furnitureElement.querySelector('input[type=checkbox]');
            if (!markElement.checked) {
                return;
            }

            const name = furnitureElement.children.item(1).textContent;
            const price = Number(furnitureElement.children.item(2).textContent);
            const decorationFactor = Number(furnitureElement.children.item(3).textContent);

            names.push(name);
            totalPrice += price;
            totalDecorationFactor += decorationFactor;
        });

        const averageDecorationFactor = (totalDecorationFactor / names.length);

        outputTextElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        outputTextElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextElement.textContent += `Average decoration factor: ${averageDecorationFactor}`;
    });

}