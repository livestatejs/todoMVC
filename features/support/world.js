module.exports.World = function (callback) {
    var webdriverio = require('webdriverio'),
        options = { desiredCapabilities: { browserName: 'phantomjs' } };
    
    callback({
        browser: webdriverio.remote(options).init()
    });
}