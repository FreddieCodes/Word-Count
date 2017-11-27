const App = require('../app.js');
var readBook = App.readBook;
var removePunct = App.removePunct;
var splitWords = App.splitWords;

describe("Book", () =>{
    it("can output it's text contents", () => {
        expect(readBook('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')).toEqual('This test works.');
    });

    it("can remove all punctuation", function(){
        var sampleBook = "This! t^est&* isn't isn't wor-king?"
        expect(removePunct(sampleBook)).toEqual("This test isnt isnt working");
    });

    it("can place all the indivual words into an array", function(){
        var sampleBook = "This test isnt isnt working"
        expect(splitWords(sampleBook)).toEqual(['This', 'test', 'isnt', 'isnt', 'working']);
    });

});