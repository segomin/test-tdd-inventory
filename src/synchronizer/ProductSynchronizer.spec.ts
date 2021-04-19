import { AuctionProductSourceStub } from "../test/stub/auction";
import { AuctionProductImporter } from "../suppliers/auction/AuctionProductImporter";
import { auction } from "../test/mock";
import { ListPriceFilter } from "./ListPriceFilter";
import { ProductSynchronizer } from "./ProductSynchronizer";
import { ProductInventorySpy } from "../test/spy/ProductInventorySpy";
import { Pricing } from "../model/Pricing";
import { Product } from "../model/Product";
import { App } from "../app";

describe('Product Synchronizer', () => {
    let sources: App.AuctionProduct[];
    beforeEach(() => {
        sources = [...auction.sources]
    })

    it('should saves Products', () => {
        const stub = new AuctionProductSourceStub(sources)
        const importer = new AuctionProductImporter(stub)
        const validator = new ListPriceFilter(0)
        const spy = new ProductInventorySpy();
        const sut = new ProductSynchronizer(importer, validator, spy);

        sut.run();

        const expected = importer.fetchProducts();
        console.log('spy', spy.getLog(), 'expected', expected);
        expect(spy.getLog()).toEqual(expected);
    })

    it('should not save invalid product', () => {
        // Arrange
        const products = sources;
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

    
    it('should not save invalid product by mock', () => {
        // Arrange
        const pricing = new Pricing(10, 1);
        const product = new Product('auction', 'code', 'name', pricing);

        const importer = new class {
            fetchProducts = jest.fn().mockImplementation(() => [product]);
        } as App.ProductImporter;
        

        const validator = new class {
            isValid = jest.fn().mockImplementation(() => false);
        } as App.ProductValidator;

        const inventory = new class {
            upsertProduct = jest.fn()
        } as App.ProductInventory

        const sut = new ProductSynchronizer(importer, validator, inventory);

        // Act
        sut.run();

        // Assert
        expect(inventory.upsertProduct).not.toBeCalled();
    })
})