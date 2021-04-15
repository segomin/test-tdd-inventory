import { App } from '../../app';

export class AuctionProductImporter implements App.ProductImporter {
    constructor(private dataSource: App.AuctionProductSource) { }

    fetchProducts() {
        return [];
    }
}