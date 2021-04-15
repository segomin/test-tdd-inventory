import { App } from '../../app';
import { Product } from '../../model/Product';
import { Pricing } from '../../model/Pricing';

export class AuctionProductTranslator {
    public translate = (p: App.AuctionProduct): Product => {
        return new Product('AUCTION', p.id, p.title, this.getPricing(p));
    }

    private getPricing(p: App.AuctionProduct) {
        return new Pricing(p.listPrice, p.listPrice - p.sellingPrice);
    }
}