import { AuctionProductImporter } from "./AuctionProductImporter"
import { auction } from "../../test/mock"
import { AuctionProductSourceStub } from "../../test/stub/auction"
import { Pricing } from "../../model/Pricing";

describe('Auction Product Importer', () => {
    it('should have all Products', () => {
        const stub = new AuctionProductSourceStub(auction.sources)
        const sut = new AuctionProductImporter(stub)

        const actual = sut.fetchProducts();

        expect(actual.length).toBe(auction.sources.length);
    })

    it('should set supplier name', () => {
        const stub = new AuctionProductSourceStub(auction.sources)
        const sut = new AuctionProductImporter(stub)

        const actual = sut.fetchProducts();

        actual.forEach(p => {
            expect(p.site).toBe('AUCTION');
        })
    })

    it('should set all properties', () => {
        const source = auction.sources[0];
        const stub = new AuctionProductSourceStub([source])
        const sut = new AuctionProductImporter(stub)

        const products = sut.fetchProducts();
        const actual = products[0];

        expect(actual.id).toBe(source.id);
        expect(actual.name).toBe(source.title);
        expect(actual.pricing).toEqual(new Pricing(source.listPrice, source.listPrice - source.sellingPrice));
    })
})