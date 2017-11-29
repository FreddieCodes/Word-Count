const controller = require('../src/controller.js').controller;

describe("Controller", () => {
    it("can output the word, count and if the word count is a prime of each item in array", () => {
        const test = controller.init('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')
        expect(test).toEqual('Word | Count | Prime\nthis | 1 | false\ntest | 1 | false\nworks | 1 | false\n');
    });
});


