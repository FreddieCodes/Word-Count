const controller = require('./src/controller.js').controller

const runApp = function(filename){
    controller.init(filename);
};

runApp('bigtest.txt');