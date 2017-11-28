const Book = require('./src/book.js').Book
const Word = require('./src/word.js').Word
const controller = require('./src/controller.js').controller

var runApp = function(filename){
    controller.init(filename);
};

runApp('bigtest.txt');
