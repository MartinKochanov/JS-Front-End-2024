function sortCatalog(products) {
    const catalog = {};

    products.sort((a,b) => a.localeCompare(b));

    for (const product of products) {
        const [name, price] = product.split(' : ');
        const initial = name.charAt(0).toUpperCase();
        if (!catalog[initial]) {
            catalog[initial] = [];
        }
        catalog[initial].push({ name, price: Number(price) });
    }
    let result = '';
    for (const group in catalog) {
        result += `${group}\n`;
        for (const product of catalog[group]) {
            result += `  ${product.name}: ${product.price}\n`;
        }
    }

    return result;
}

const products = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
];

console.log(sortCatalog(products));