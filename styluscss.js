var express = require('express');
var app = express();
var path = require('path');
var dir = process.argv[3];

app.use(require('stylus').middleware(dir));
app.use(express.static(dir));

app.listen(process.argv[2]);