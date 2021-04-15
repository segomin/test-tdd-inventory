import { App } from '../../app';

export class AuctionProductImporter implements App.ProductImporter {
    constructor(private dataSource: App.AuctionProductSource) { }

    fetchProducts() {
        const products: App.Product[] = [];
        this.dataSource.fetchProducts().forEach(p => products.push({} as App.Product));
        return products;
    }
}