var mockApi = new require('../../helpers/mockApi')('127.0.0.1', '8181');

module.exports.World = function (callback) {
    var webdriverio = require('webdriverio'),
        options = { desiredCapabilities: { browserName: 'phantomjs' } };
    
    callback({
        browser: webdriverio.remote(options).init(),
        mockApi: mockApi
    });
}