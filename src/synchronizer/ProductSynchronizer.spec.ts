import { AuctionProductSourceStub } from "../test/stub/auction";
import { AuctionProductImporter } from "../suppliers/auction/AuctionProductImporter";
import { auction } from "../test/mock";
import { ListPriceFilter } from "./ListPriceFilter";
import { ProductSynchronizer } from "./ProductSynchronizer";
import { ProductInventorySpy } from "../test/spy/ProductInventorySpy";

describe('Product Synchronizer', () => {
    it('should saves Products', () => {
        const stub = new AuctionProductSourceStub(auction.sources)
        const importer = new AuctionProductImporter(stub)
        const validator = new ListPriceFilter(0)
        const spy = new ProductInventorySpy();
        const sut = new ProductSynchronizer(importer, validator, spy);

        sut.run();

        const expected = importer.fetchProducts();
        expect(spy.getLog()).toEqual(expected);
    })
})