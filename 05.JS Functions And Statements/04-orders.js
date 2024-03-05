function solve(product, quantity) {
    const price = (product) => {
        switch (product) {
            case 'coffee':
                return 1.50;
            case 'water':
                return 1.00;
            case 'coke':
                return 1.40;
            case 'snacks':
                return 2.00
        }
    }

    console.log((quantity * price(product)).toFixed(2));
}

solve('coffee', 2)