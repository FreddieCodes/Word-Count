const fs = require('fs');

var Book = function(){
    this.content;
    this.wordsArray;
}

Book.prototype.readBook = function(book){
    var bookString = fs.readFileSync(book, 'utf8');
    this.content = bookString;
    return bookString;
};

Book.prototype.removePunct = function(book){
    var newString = book.replace(/[.,\/#!?@$'%\^&\*;:{}=\-_`~()]/g,"");
    this.content = newString;
    return newString;
};

Book.prototype.removeCap = function(book){
    var newString = book.toLowerCase();
    this.content = newString;
    return newString;
};

Book.prototype.removeSpaces = function(book){
  var newString = book.replace(/\s{2,}/g," ").replace(/\r?\n|\r/g," ");
  this.content = newString;
  return newString;
};

Book.prototype.splitWords = function(book){
    var arr = book.split(" ");
    this.wordsArray = arr;
    return arr;
};

Book.prototype.removeDup = function(array){
    var newArr = this.wordsArray.filter(function(curr, index, arr) {
        return index == arr.indexOf(curr);
    });
    this.wordsArray = newArr;
    return this.wordsArray;
};

module.exports = {
   Book
};
