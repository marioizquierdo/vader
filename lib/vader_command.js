"use strict";

let fs = require('fs');
let vader = require('./vader');

// Read vader code from file
let args = process.argv;
let vaderFile = args[2];
if (!vaderFile) throw("Please specify vader source file");
let vaderCode = fs.readFileSync(vaderFile, 'utf8');

// Compile to JavaScript
let jsCode = vader.compileToJS(vaderCode);

// Print result
console.log(jsCode);