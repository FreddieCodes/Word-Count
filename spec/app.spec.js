const App = require('../app.js');
var readBook = App.readBook;
var removePunct = App.removePunct;
var removeSpaces = App.removeSpaces;
var splitWords = App.splitWords;
var removeDup = App.removeDup;
var removeCap = App.removeCap;

describe("Book", function(){
    it("can output it's text contents", function(){
        expect(readBook('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')).toEqual('This test works.');
    });

    it("can remove all punctuation", function(){
        var sampleBook = "This! t^est&* isn't isn't wor-king?";
        expect(removePunct(sampleBook)).toEqual("This test isnt isnt working");
    });

    it("can remove capitalisation", function(){
        var sampleBook = "THIS test Is WorkING";
        expect(removeCap(sampleBook)).toEqual("this test is working");
    });

    it("can remove line breaks", function(){
        var sampleBook = "This test works\n\nThis test doesnt work\n\nSTOP";
        expect(removeSpaces(sampleBook)).toEqual("This test works This test doesnt work STOP")
    });

    it("can place all the indivual words into an array", function(){
        var sampleBook = "This test isnt isnt working";
        expect(splitWords(sampleBook)).toEqual(['This', 'test', 'isnt', 'isnt', 'working']);
    });

    it("can remove duplicate values from array", function(){
        var sampleArray = ['This', 'test', 'isnt', 'This', 'isnt', 'working'];
        expect(removeDup(sampleArray)).toEqual(['This', 'test', 'isnt', 'working']);
    });

});