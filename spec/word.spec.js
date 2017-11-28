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
});
