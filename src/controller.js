// GLOBAL APP CONTROLLER
const Book = require('./book.js').Book
const Word = require('./word.js').Word


var controller = (function(){

    var checkPrimes = function(arrayOfWords){
        for (var i = 0; i < arrayOfWords.length; i++) {
            const element = arrayOfWords[i];
            element.isPrime();
        }
    };

    var output = function(arrayOfWords){
        var string = "";
        var header = "Word | Count | Prime";
        for (var i = 0; i < arrayOfWords.length; i++) {
            const element = arrayOfWords[i];
        string += `${element.word} | ${element.count} | ${element.prime}\n`
        }
        return `${header}\n${string}`;
    };

    return {
        init: function(insertedBook){
            var book = new Book
            book.readBook(insertedBook);
            book.removePunct();
            book.removeCap();
            book.removeSpaces();
            book.splitWords();
            book.removeDup();
            checkPrimes(book.countWords());
            var finalOutput = output(book.wordsArray);
            console.log(finalOutput);
            return finalOutput;
            }
        };
    
})(); 

// controller.init('bigtest.txt');

module.exports = {
    controller
};
