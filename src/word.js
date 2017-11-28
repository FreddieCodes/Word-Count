var Word = function(name, number){
    this.name = name;
    this.number = number
    this.prime;
};

Word.prototype.isPrime = function() {
    for(var i = 2; i < this.number; i++) {
        if(this.number % i === 0) {
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