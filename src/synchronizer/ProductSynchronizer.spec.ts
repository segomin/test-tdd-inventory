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

    it('should not save invalid product', () => {
        // Arrange
        const products = auction.sources;
        const lowerBound = Math.max(...products.map(p => p.listPrice + 100));
        const validator = new ListPriceFilter(lowerBound);

        const stub = new AuctionProductSourceStub(products);
        const importer = new AuctionProductImporter(stub);
        const spy = new ProductInventorySpy();
        const sut = new ProductSynchronizer(importer, validator, spy);

        // Act
        sut.run();

        // Assert
        expect(spy.getLog()).toEqual([]);
    })

})