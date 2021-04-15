import { App } from "../../app";

export class AuctionProductSourceStub implements App.AuctionProductSource {

    constructor(private source: App.AuctionProduct[]) { }

    fetchProducts() {
        return [...this.source];
    }
}