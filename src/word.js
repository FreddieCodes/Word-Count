const Word = function(word, count){
    this.word = word;
    this.count = count
    this.prime = false;
};

Word.prototype.isPrime = function() {
    if (this.count < 2) return false;
    const sqrRt = Math.floor(Math.sqrt(this.count));
    for(let i = 2; i <= sqrRt; i++) {
        if(this.count % i === 0) {
            this.prime = false;
            return false;
        }
    }
    this.prime = true;
    return true;
};

module.exports = {
    Word
};
