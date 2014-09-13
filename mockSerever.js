var q = require('q'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    port = 8080;


function getJson() {
    var deferred = q.defer();
    
    fs.readFile('todos.json', 'utf-8', function (error, json) {
    
        if (error){
            deferred.reject(new Error(error));
        } else{
            deferred.resolve(json);
        }
    });

    return deferred.promise;
}

app.get('/todo', function (req, res) {
    getJson().then(function (json) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
    });
});

app.listen(port);
console.log('Express server started on port %s', port);

module.exports = app;