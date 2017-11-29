const fs = require('fs');
const Word = require('./word.js').Word

const Book = function(){
    this.content;
    this.wordsArray;
}

Book.prototype.readBook = function(book){
    const bookString = fs.readFileSync(book, 'utf8');
    this.content = bookString;
    return bookString;
};

Book.prototype.removePunct = function(){
    const newString = this.content.replace(/[.,\/#!?@$'%\^&\*;:{}=\-_`~()]/g,"");
    this.content = newString;
    return newString;
};

Book.prototype.removeCap = function(){
    const newString = this.content.toLowerCase();
    this.content = newString;
    return newString;
};

Book.prototype.removeSpaces = function(){
    const newString = this.content.replace(/\s{2,}/g," ").replace(/\r?\n|\r/g," ");
    this.content = newString;
    return newString;
};

Book.prototype.splitWords = function(){
    const arr = this.content.split(" ");
    this.wordsArray = arr;
    return arr;
};

Book.prototype.removeDup = function(){
    const newArr = this.wordsArray.filter((curr, index, arr) => index == arr.indexOf(curr));
    this.wordsArray = newArr;
    return this.wordsArray;
};

Book.prototype.countWords = function(){
    const newArr = []
    for (let i = 0; i < this.wordsArray.length; i++) {
        const element = this.wordsArray[i];
        const regexp = new RegExp(element, 'gi');
            const word = new Word(element, this.content.match(regexp).length)
            newArr.push(word);
    }
    this.wordsArray = newArr;
    return newArr;
};

module.exports = {
   Book
};
