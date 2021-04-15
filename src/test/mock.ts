import { App } from "../app";
import { getRandomInteger, getRandomString, range } from "../utils";

export const auction = {
    sources: newAuctionProducts()
};

function newAuctionProducts() {
    return range(5).map(n => ({
        id: `${n}`,
        title: getRandomString(30),
        listPrice: getRandomInteger(100, 500),
        sellingPrice: getRandomInteger(100, 500),
    } as App.AuctionProduct));
}

