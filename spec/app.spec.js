const App = require('../app.js');
var readBook = App.readBook;
var removePunct = App.removePunct;
var removeSpaces = App.removeSpaces;
var splitWords = App.splitWords;

describe("Book", () =>{
    it("can output it's text contents", function(){
        expect(readBook('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')).toEqual('This test works.');
    });

    it("can remove all punctuation", function(){
        var sampleBook = "This! t^est&* isn't isn't wor-king?"
        expect(removePunct(sampleBook)).toEqual("This test isnt isnt working");
    });

    it("can remove line breaks", function(){
        var sampleBook = "This test works\n\nThis test doesnt work\n\nSTOP"
        expect(removeSpaces(sampleBook)).toEqual("This test works This test doesnt work STOP")
    });

    it("can place all the indivual words into an array", function(){
        var sampleBook = "This test isnt isnt working"
        expect(splitWords(sampleBook)).toEqual(['This', 'test', 'isnt', 'isnt', 'working']);
    });

});