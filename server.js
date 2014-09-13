var express = require('express'),
    app = express(),
    port = 8181;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.listen(port);
console.log('Express server started on port %s', port);

module.exports = app;