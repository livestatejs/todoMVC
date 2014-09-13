module.exports = function () {
    this.World = require("../support/world.js").World;
    
    this.Given(/^I am on the homepage$/, function(callback) {

        this.browser.url('http://localhost:8181/index.html', callback);
    });
    
    this.Then('I should see $itemCount items in the list', function(itemCount, callback) {
        itemCount = parseInt(itemCount);
        
        this.browser.elements('#list .item', function (error, selector) {
            if (selector.value.length === itemCount) {
                callback();
            } else {
                callback.fail('Expected ' + itemCount + ' list items, found ' + selector.value.length);
            }
        });

        callback();
    });
};