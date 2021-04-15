import { App } from '../app';

export class ProductSynchronizer {
    constructor(private importer: App.ProductImporter,
                private validator: App.ProductValidator,
                private inventory: App.ProductInventory) { }

    run(): void {
        const products = this.importer.fetchProducts();
        products.forEach(this.inventory.upsertProduct);
    }
}