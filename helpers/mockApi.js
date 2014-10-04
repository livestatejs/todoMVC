var httpHelper = require('../helpers/httpHelper'),
    q = require('q');

module.exports = function (host, port) {
    
    var methods = {
        "items\.count": function (deferred) {
            deferred.resolve(2);
        },
        
        "items\.(\\d{1})\.(\\w+)": function (deferred, varId, itemIndex, propertyName) {
            callServer('/todo', 'GET').then(function (res) {
                var items = JSON.parse(res.body);
                
                deferred.resolve(items[itemIndex - 1][propertyName]);
            });
        }
    };
    
    function callServer(path, mode) {
        return httpHelper.callUrl('127.0.0.1', 8080, path, mode);
    }
    
    return {
        getVariable: function (varId) {
            var deferred = q.defer(),
                regEx,
                result;
            
            for (regEx in methods) {
                result = new RegExp(regEx).exec(varId) 
                if (result !== null) {
                    methods[regEx].apply(null, [deferred].concat(result));
                }
            }
            
            return deferred.promise;
        }
    }
};
