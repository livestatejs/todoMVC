var express = require('express'),
    app = express(),
    ip = process.env.IP || 'localhost',
    port = process.env.PORT || 8080,
    mockServer = require('./mockServer');


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

mockServer(app);

app.listen(port, ip);
console.log('Express server started on port %s', port);

module.exports = app;