import { App } from '../app';

export class Pricing implements App.Pricing {
    constructor(
        public discount: number,
        public listPrice: number,
    ) { }
}