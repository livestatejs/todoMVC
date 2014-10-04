var q = require('q'),
    fs = require('fs');

module.exports = function (app) { 

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
        console.log('get request');
        getJson().then(function (json) {
            console.log(JSON.parse(json));
            res.setHeader('Content-Type', 'application/json');
            res.end(json);
        }, function (error) {
            res.end('error');
        });
    });
};