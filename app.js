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

var removeSpaces = function(book){
    return book.replace(/\s{2,}/g," ");
}

var removeDup = function(array){
    return array.filter(function(curr, index, arr) {
        return index == arr.indexOf(curr);
    })
};

module.exports = {
    readBook,
    removePunct,
    splitWords,
    removeSpaces,
    removeDup
};
