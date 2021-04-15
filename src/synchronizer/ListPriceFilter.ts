import { App } from '../app';
import { Product } from '../model/Product';

export class ListPriceFilter implements App.ProductValidator {
    constructor(private lowerBound: number) { }

    isValid(product: Product) {
        return product.pricing.listPrice > this.lowerBound;
    }
}