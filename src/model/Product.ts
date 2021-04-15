import { App } from '../app';

export class Product implements App.Product {
    constructor(public site: string,
        public id: string,
        public title: string,
        public discount: number
    ) { }
}