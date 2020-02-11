var supertest = require('supertest');
var expressApp;

describe('Interest calculator', function () {

    beforeAll(function () {
        expressApp = require('../src/app');
    });

    it('should return a final value if request data is correct', function (done) {
        var requestData = { "kapital": 1000, "czas": 1 },
            expectedResponse = { capital: 1200 }

        supertest(expressApp)
            .post('/rest/capital')
            .send(requestData)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(expectedResponse)
            .end(function (err, res) {
                if (err) done.fail(err);
                done()
            });
    });

    it('should return a final value if request data is correct', function (done) {
        var requestData = { "kapital": 999.99, "czas": 1 },
            expectedResponse = { capital: null }

        supertest(expressApp)
            .post('/rest/capital')
            .send(requestData)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(expectedResponse)
            .end(function (err, res) {
                if (err) done.fail(err);
                done()
            });
    });

 
});