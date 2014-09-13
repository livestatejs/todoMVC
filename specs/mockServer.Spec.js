/*globals require, describe, it, expect*/
var httpHelper = require('../helpers/httpHelper');

describe('Given MockServer is running', function () {
    describe('WHEN /todo url is called THEN', function () {
        var response;

        beforeEach(function (done) {
            httpHelper.callUrl('127.0.0.1', 8080, '/todo', 'GET').then(function (res) {
                response = res;
                done();
            });
        }, 200);

        it('SHOULD return JSON typed response', function () {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toMatch('json');
        });

        it('SHOULD return 2 items', function () {
            expect(JSON.parse(response.body).length).toEqual(2);
        });

        it('SHOULD contain items with title property', function () {
            expect(JSON.parse(response.body)[0].title).toBeDefined();
            expect(JSON.parse(response.body)[0].title).toEqual(jasmine.any(String));
        });
    });
});