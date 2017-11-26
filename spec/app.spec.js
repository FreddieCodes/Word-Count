const App = require('../app.js');
var readBook = App.selectBook;

describe("Book", () =>{
    it("can output the content of a .txt file", () => {
        expect(readBook('/Users/frederickofori/Documents/TechTests/Word-Count/test.txt')).toEqual('This test works.');
    });
});