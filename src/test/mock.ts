import { App } from "../app";
import { getRandomInteger, getRandomString, range } from "../utils";

export const auction = {
    sources: newAuctionProducts()
};

function newAuctionProducts() {
    return range(5).map(n => {
        const listPrice = getRandomInteger(100, 500);
        const sellingPrice = listPrice - getRandomInteger(1, 100);
        return ({
            id: `${n}`,
            title: getRandomString(30),
            listPrice,
            sellingPrice,
        } as App.AuctionProduct);
    });
}

