const controller = require('../src/controller.js').controller;

describe("Controller", function(){
    it("can output the word, number and if the number is a prime of each item in array", function(){
        var test = controller.init('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')
        expect(test).toEqual('Word | Count | Prime\nthis | 1 | false\ntest | 1 | false\nworks | 1 | false\n');
    });
});


