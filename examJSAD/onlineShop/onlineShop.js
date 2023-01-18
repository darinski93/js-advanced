class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.')
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let searchedProduct = this.products.find(p => p.product === product);

        if (searchedProduct == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        if (minimalQuantity <= searchedProduct.quantity) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - searchedProduct.quantity;

        searchedProduct.quantity = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        let searchedProduct = this.products.find(p => p.product === product);

        if (searchedProduct == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        searchedProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 })

        return `The ${product} has been successfully sold.`
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error(`There are no sales today!`);
        }

        let output = [`You sold ${this.sales.length} products today!`]
        output.push('Products in the warehouse:');
        this.products.forEach(p => output.push(`${p.product}-${p.quantity} more left`))

        return output.join('\n')
    }
}







