export declare namespace App {
    // Auction
    interface AuctionProduct {
        id: string;
        title: string;
        listPrice: number;
        selleringPrice: number;
    }

    interface AuctionProductSource {
        fetchProducts: () => AuctionProduct[]
    }

    // System
    interface Product {
        site: string;
        id: string;
        title: string;
        discount: number;
    }

    interface ProductImporter {
        fetchProducts: () => Product[]
    }
}