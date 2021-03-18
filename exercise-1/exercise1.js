const util = require('util');
const fs = require('fs');
const repeat = require('./repeat.js');
const createfile = require('./createfile.js');
const readfile = require('./readfile.js');

const runEx1 = () => {
    repeat('Keep coding!');
    createfile('Jemimah');
    readfile('./input.txt');
}

module.exports = runEx1;