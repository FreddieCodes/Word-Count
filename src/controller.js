const Book = require('./book.js').Book

const controller = (function(){

    const checkPrimes = function(arrayOfWords){
        for (let i = 0; i < arrayOfWords.length; i++) {
            const element = arrayOfWords[i];
            element.isPrime();
        }
    };

    const output = function(arrayOfWords){
        let string = "";
        const header = "Word | Count | Prime";
        for (let i = 0; i < arrayOfWords.length; i++) {
            const element = arrayOfWords[i];
        string += `${element.word} | ${element.count} | ${element.prime}\n`;
        }
        return `${header}\n${string}`;
    };

    return {
        init(insertedBook){
            const book = new Book
            book.readBook(insertedBook);
            book.removePunct();
            book.removeCap();
            book.removeSpaces();
            book.splitWords();
            book.removeDup();
            checkPrimes(book.countWords());
            const finalOutput = output(book.wordsArray);
            console.log(finalOutput);
            return finalOutput;
            }
        }; 
})(); 

module.exports = {
    controller
};
