var express = require('express');
var app = express();
var path = require('path');

app.put('/message/:id', function(req, res) {
    var hash = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');
    res.end(hash);
});

app.listen(process.argv[2]);