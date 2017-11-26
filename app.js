const fs = require('fs');

var readBook = function(book){
    return fs.readFileSync(book, 'utf8');
};


module.exports = {
    selectBook
};