const Word = require('../src/word.js').Word;

describe("Word", () => {
    it("has a word property", () => {
        const word = new Word("test", 1)
        expect(word.word).toBeDefined();
    });

    it("has a count property", () => {
        const word = new Word("test", 1)
        expect(word.count).toBeDefined();
    });

    it("has a prime property that defaults to false", () => {
        const word = new Word("test", 1)
        expect(word.prime).toBeDefined();
        expect(word.prime).toEqual(false);
    });

    it("can calculate whether a number is a prime number", () => {
        const word1 = new Word("test1", 7);
        const word2 = new Word("test2", 9);
        const word3 = new Word("test3", 4);
        word1.isPrime();
        word2.isPrime();
        word3.isPrime();
        expect(word1.prime).toEqual(true);
        expect(word2.prime).toEqual(false);
        expect(word3.prime).toEqual(false);
    });

});
