import { App } from '../../app';
import { Product } from '../../model/Product';

export class AuctionProductImporter implements App.ProductImporter {
    constructor(private dataSource: App.AuctionProductSource) { }

    fetchProducts() {
        return this.dataSource.fetchProducts()
            .map(p => new Product('AUCTION', null as any, null as any, null as any));
    }
}