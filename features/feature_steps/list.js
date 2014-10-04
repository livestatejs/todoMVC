module.exports = function () {
    this.World = require("../support/world.js").World;
    
    this.Given(/^I am on the homepage$/, function(callback) {

        this.browser.url('http://localhost:8080/index.html', callback);
    });
    
    this.Then('I should see <$mockVariableId> items in the list', function(mockVariableId, callback) {
        this.mockApi.getVariable(mockVariableId).then(function (itemCount) {
            this.browser.elements('#list .item', function (error, selector) {
                if (selector.value.length === itemCount) {
                    callback();
                } else {
                    callback.fail('Expected ' + itemCount + ' list items, found ' + selector.value.length);
                }
            });    
        }.bind(this));
    });
    
    this.Then('the $itemNumber. list item\'s value is <$mockVariableId>', function(itemNumber, mockVariableId, callback) {
        this.mockApi.getVariable(mockVariableId).then(function (expectedItemValue) {
            this.browser.elements('#list .item', function (error, selector) {
                var elementId = selector.value[itemNumber - 1].ELEMENT;

                this.browser.elementIdText(elementId, function (error, selector) {
                    if (selector.value === expectedItemValue) {
                        callback();
                    } else {
                        callback('Elements value doesnt match, expected: "' + expectedItemValue + '" actual: "' + selector.value + '"');    
                    }
                    
                }.bind(this));
                
            }.bind(this));
        }.bind(this));
    });
};