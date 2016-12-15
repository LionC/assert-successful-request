const assert = require('assert')

function assertSuccessfulResponse(err, response) {
    assert.ifError(err)

    if(response.statusCode >= 400)
        throw new Error('Asserted succesful HTTP response, but got status code ' + response.statusCode)
}

module.exports = assertSuccessfulResponse
