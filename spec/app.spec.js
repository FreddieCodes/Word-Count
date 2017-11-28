const Book = require('../app.js').Book;

describe("Book", function(){
    var book;
    beforeEach(function() {
        book = new Book()
    });

    it("can output it's text contents", function(){
        expect(book.readBook('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')).toEqual('This test works.');
    });

    it("can remove all punctuation", function(){
        book.content = "This! t^est&* isn't isn't wor-king?";
        book.removePunct();
        expect(book.content).toEqual("This test isnt isnt working");
    });

    it("can remove capitalisation", function(){
        book.content = "THIS test Is WorkING";
        book.removeCap();
        expect(book.content).toEqual("this test is working");
    });

    it("can remove line breaks", function(){
        book.content = "This test works\n\nThis test doesnt work\n\nSTOP";
        book.removeSpaces();
        expect(book.content).toEqual("This test works This test doesnt work STOP")
    });

    it("can place all the indivual words into an array", function(){
        book.content = "This test isnt isnt working";
        book.splitWords();
        expect(book.wordsArray).toEqual(['This', 'test', 'isnt', 'isnt', 'working']);
    });

    it("can remove duplicate values from array", function(){
        book.wordsArray = ['This', 'test', 'isnt', 'This', 'isnt', 'working'];
        book.removeDup();
        expect(book.wordsArray).toEqual(['This', 'test', 'isnt', 'working']);
    });

});
