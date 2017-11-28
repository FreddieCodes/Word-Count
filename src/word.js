var Word = function(name, number){
    this.name = name;
    this.number = number
    this.prime = false;
};

Word.prototype.isPrime = function() {
    if (this.number < 2) return false;
    var sqrRt = Math.floor(Math.sqrt(this.number));
    for(var i = 2; i <= sqrRt; i++) {
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
