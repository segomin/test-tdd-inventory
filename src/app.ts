export declare namespace App {
    // Auction
    interface AuctionProduct {
        id: string;
        title: string;
        listPrice: number;
        sellingPrice: number;
    }

    interface AuctionProductSource {
        fetchProducts: () => AuctionProduct[]
    }

    // System
    interface Pricing {
        listPrice: number;
        discount: number;
    }

    interface Product {
        site: string;
        id: string;
        name: string;
        pricing: Pricing
    }

    interface ProductImporter {
        fetchProducts: () => Product[]
    }
}