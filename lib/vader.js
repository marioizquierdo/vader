"use strict";

let fs = require('fs');
let parser = require('./parser');

// Version
exports.version = '0.0.1'

// Given a string in VaderScript, return a string in JavaScript.
exports.compileToJS = (vaderCode) => {
  let ast = parser.parse(vaderCode);
  let jsCode = ast.compileToJS();
  return jsCode;
}