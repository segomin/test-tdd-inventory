import { App } from '../../app';
import { AuctionProductTranslator } from './AuctionProductTranslator';

export class AuctionProductImporter implements App.ProductImporter {
    private translator: AuctionProductTranslator;
    constructor(private dataSource: App.AuctionProductSource) {
        this.translator = new AuctionProductTranslator();
    }

    fetchProducts() {
        return this.dataSource.fetchProducts().map(this.translator.translate);
    }
}