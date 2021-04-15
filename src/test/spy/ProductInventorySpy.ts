import { App } from '../../app';

export class ProductInventorySpy implements App.ProductInventory{
    private products: App.Product[] = [];

    public upsertProduct = (product: App.Product): void => {
        this.products.push(product);
    }

    getLog() {
        return this.products;
    }
}