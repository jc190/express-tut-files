var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join('') + '\n');
});

app.listen(process.argv[2]);