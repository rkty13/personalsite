const express = require('express');
const nunjucks = require('nunjucks');
var app = express();

const port = process.env.PORT || 8080;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.use(express.static('public'));

app.listen(port, function() {
    console.log("Server started on port " + port + ".");
});