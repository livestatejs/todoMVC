var jasmine = require('jasmine');
    //supertest = require('supertest'),
    //app = require('../mockServer'),
    //testApp = supertest(app);

function callUrl(hostname, port, path, method) {
    var options = {
      hostname: hostname,
      port: port,
      path: path,
      method: method
    },
    headers,
    statusCode,
    body,
    deferred = q.defer();

    var req = http.request(options, function(res) {
        statusCode = res.statusCode;
        headers = res.headers;
        
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk;
        });
        
        res.on('end', function () {
            deferred.resolve(header, statusCode, body);
        })
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.write('data\n');
    req.write('data\n');
    req.end();
    
    return deferred.promise;
}

describe('WHEN /todo url is called THEN', function () {

    it('SHOULD return JSON typed response', function () {
        /*
        testApp.get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        */
        
        callUrl('localhost', 8080, '/todo', 'GET').then(function (headers, statusCode, body) {
           expect(statusCode).toEqual(200); 
        });
    });
    
    xit('SHOULD return 2 items', function () {
        
    });
});