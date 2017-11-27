const fs = require('fs');

var readBook = function(book){
    return fs.readFileSync(book, 'utf8');
};

var removePunct = function(book){
    return book.replace(/[.,\/#!?@$'%\^&\*;:{}=\-_`~()]/g,"");
}

module.exports = {
    readBook,
    removePunct
};