const Word = require('../src/word.js').Word;

describe("Word", function(){
    it("has a word property", function(){
        var word = new Word("test", 1)
        expect(word.word).toBeDefined();
    });

    it("has a count property", function(){
        var word = new Word("test", 1)
        expect(word.count).toBeDefined();
    });

    it("can calculate whether a number is a prime number", function(){
        var word1 = new Word("test1", 7);
        var word2 = new Word("test2", 9);
        var word3 = new Word("test3", 4);
        word1.isPrime();
        word2.isPrime();
        word3.isPrime();
        expect(word1.prime).toEqual(true);
        expect(word2.prime).toEqual(false);
        expect(word3.prime).toEqual(false);
    });

});
