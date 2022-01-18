const request = require("supertest")
const server = require("../server")

describe('API server', () => {
    let api 
    let testhabit = {
        "userName": "Bob",
        "email": "test@test.com",
        "password": "uncle"


    }

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(3000, () => console.log('Test server running on port 3000'))
    })

    afterAll(done => {
        // close the server, then run done
        console.log('Gracefully stopping test server')
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })


})