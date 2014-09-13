/*globals require, describe, it, expect*/
var webdriverio = require('webdriverio');

describe('Phantom.JS Server', function () {
    it('SHOULD work', function () {
        var options = { desiredCapabilities: { browserName: 'phantomjs' } };

        webdriverio
            .remote(options)
            .init()
            .url('http://www.google.com')
            .title(function (err, res) {
                expect(res.value).toEqual('Google');
                return err;
            })
            .end();
    });
});