import { AuctionProductImporter } from "./AuctionProductImporter"
import { auction } from "../../test/mock"
import { AuctionProductSourceStub } from "../../test/stub/auction"

describe('Auction Product Importer', () => {
    it('should have all Products', () => {
        const stub = new AuctionProductSourceStub(auction.sources)
        const sut = new AuctionProductImporter(stub)

        const actual = sut.fetchProducts();

        expect(actual.length).toBe(auction.sources.length);
    })
})