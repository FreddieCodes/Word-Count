const Word = require('../src/word.js').Word;

describe("Word", function(){
    it("has a name property", function(){
        var word = new Word("test", 1)
        expect(word.name).toBeDefined();
    });

    it("has a number property", function(){
        var word = new Word("test", 1)
        expect(word.number).toBeDefined();
    });

    it("can calculate whether a number is a prime number", function(){
        var word1 = new Word("test1", 7);
        var word2 = new Word("test2", 9);
        word1.isPrime();
        word2.isPrime();
        expect(word1.prime).toEqual(true);
        expect(word2.prime).toEqual(false);
    });

});