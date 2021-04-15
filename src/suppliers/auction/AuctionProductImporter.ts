import { App } from '../../app';
import { Product } from '../../model/Product';
import { Pricing } from '../../model/Pricing';

export class AuctionProductImporter implements App.ProductImporter {
    constructor(private dataSource: App.AuctionProductSource) { }

    fetchProducts() {
        return this.dataSource.fetchProducts()
            .map(p => new Product('AUCTION', p.id, p.title,
                new Pricing(p.listPrice, p.listPrice - p.sellingPrice))
            );
    }
}