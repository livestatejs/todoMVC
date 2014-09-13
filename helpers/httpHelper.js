var q = require('q'),
    http = require('http');    

module.exports = {
    callUrl: function(hostname, port, path, method) {
        var options = {
          hostname: hostname,
          port: port,
          path: path,
          method: method
        },
        headers,
        statusCode,
        body = '',
        deferred = q.defer();
    
        var req = http.request(options, function(res) {
            statusCode = res.statusCode;
            headers = res.headers;
            
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                body += chunk;
            });
            
            res.on('end', function () {
                deferred.resolve({headers: headers, statusCode: statusCode, body: body});
            });
            
            res.on('error', function (error) {
                deferred.reject(error);
            });
        });
    
        req.on('error', function() {
            deferred.reject({headers: headers, statusCode: statusCode, body: body});
        });
    
        req.end();
        
        return deferred.promise;
    }
};