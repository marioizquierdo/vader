"use strict";

let fs = require('fs');
let parser = require('./parser');

const args = process.argv;
const vaderFile = args[2];
if (!vaderFile) throw("Please specify vader source file");
const vaderCode = fs.readFileSync(vaderFile, 'utf8');
const ast = parser.parse(vaderCode);
const jsCode = ast.compileToJS();

console.log(jsCode);