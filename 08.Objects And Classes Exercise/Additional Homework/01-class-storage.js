class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (typeof product === 'object' && product !== null && 'name' in product && 'price' in product && 'quantity' in product) {
            if (this.capacity >= product.quantity) {
                this.storage.push(product);
                this.capacity -= product.quantity;
                this.totalCost += product.price * product.quantity;

            }
        }
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}
