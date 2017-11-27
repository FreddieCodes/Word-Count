const fs = require('fs');

var readBook = function(book){
    return fs.readFileSync(book, 'utf8');
};

var removePunct = function(book){
    return book.replace(/[.,\/#!?@$'%\^&\*;:{}=\-_`~()]/g,"");
};

var splitWords = function(book){
    return book.split(" ");
};

module.exports = {
    readBook,
    removePunct,
    splitWords
};