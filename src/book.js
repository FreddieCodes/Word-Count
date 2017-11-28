const fs = require('fs');
const Word = require('./word.js').Word

var Book = function(){
    this.content;
    this.wordsArray;
}

Book.prototype.readBook = function(book){
    var bookString = fs.readFileSync(book, 'utf8');
    this.content = bookString;
    return bookString;
};

Book.prototype.removePunct = function(){
    var newString = this.content.replace(/[.,\/#!?@$'%\^&\*;:{}=\-_`~()]/g,"");
    this.content = newString;
    return newString;
};

Book.prototype.removeCap = function(){
    var newString = this.content.toLowerCase();
    this.content = newString;
    return newString;
};

Book.prototype.removeSpaces = function(){
  var newString = this.content.replace(/\s{2,}/g," ").replace(/\r?\n|\r/g," ");
  this.content = newString;
  return newString;
};

Book.prototype.splitWords = function(){
    var arr = this.content.split(" ");
    this.wordsArray = arr;
    return arr;
};

Book.prototype.removeDup = function(){
    var newArr = this.wordsArray.filter(function(curr, index, arr) {
        return index == arr.indexOf(curr);
    });
    this.wordsArray = newArr;
    return this.wordsArray;
};

Book.prototype.countWords = function(){
    var newArr = []
    for (var i = 0; i < this.wordsArray.length; i++) {
        const element = this.wordsArray[i];
        var regexp = new RegExp(element, 'gi');
            // var word = new Word(element, this.content.match(regexp).length)
            var word = [element, this.content.match(regexp).length]
            newArr.push(word);
    }
    this.wordsArray = newArr;
    return newArr;
};


module.exports = {
   Book
};
