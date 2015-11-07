const express = require('express');
const nunjucks = require('nunjucks');
var app = express();

const port = process.env.PORT || 5000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.use('/', express.static('public' + '/resume.pdf'));

app.use(express.static('public'));
app.use(express.static('components'));

app.listen(port, function() {
    console.log("Server started on port " + port + ".");
});
