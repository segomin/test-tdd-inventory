export function getRandomInteger(min = 0, max = 100) {
    return ~~(Math.random() * (max - min)) + min;
}

export function getRandomString(length = 10) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

export function range(size: number) {
    return [...Array(size).keys()];
}