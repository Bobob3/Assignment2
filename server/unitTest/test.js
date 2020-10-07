var assert = require('assert');
var http = require('http');
var read = require('../routes/read');


describe('Tests for getting users', () =>{
        it('should GET all users ', () =>{
            http.get('http://localhost:3000/chat', function(response){
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {body += d;});
                response.on('end', function() {
                    assert.equal(body, 'Test');
                });
            });
        });
})

