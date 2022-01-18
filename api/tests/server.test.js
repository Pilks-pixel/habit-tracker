const { test } = require("@jest/globals")
const request = require("supertest")
const server = require("../server")

describe('API server', () => {
    let api 
    let testHabit = {
        "username": "trumpetgems",
        "email": "friend@circus.dk",
        "passwordDigest": "ahudnthpdohbapbb243"
    }
    let testLogin = {
        "email": "friend@circus.dk",
        "passwordDigest": "ahudnthpdohbapbb243"
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

    test('it responds to get / with status 200', done => { 
        request(api) 
            .get('/') 
            .expect(200, done) 
    })

    test('it responds with all users and status 200', done => { 
        request(api) 
            .get('/users') 
            .expect(200, done) 
    })

    test('it registers a user', done => { 
        request(api) 
            .post('/register')
            .send(testHabit) 
            .set('Content-Type', 'application/json')
            .expect(201, done) 
            .expect({msg: 'User created'}, done) 
    })

    test('it logs in a user', done => { 
        request(api)
            .post('/login') 
            .send(testLogin)
            .set('Content-Type', 'application/json')
            .expect(200, done) 
            .expect({ user: user.username }, done) 
    })
    
    test('returns a userId', done => {
        request(api)
            .post('/users/')
            .send('testLogin')
            .expect(User.user_id, done).toBeDefined()
    })

    test('returns correct user', done => {
        let userId = user.userId;
        request(api)
            .get('/users/${user_id}')
            .set()
            .expect(200, done)
    })

    // test('creates a habit', done => {

    // })

    // test('increament habit', done {

    // })

    // test('delete habit', done {

    // })



    
})