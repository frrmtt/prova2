var app = require ('./app');
const request = require('supertest');

describe('GET /square', function() {
    it('respond with json', async() => {
    const response = await request(app).get('/square?string=ciao');
        expect(response.body).toBe(16);
        expect(response.statusCode).toBe(200);
    });
  });

describe('GET /square', function() {
    it('respond with json', async() => {
    const response = await request(app).get('/square?string=5');
        expect(response.body).toBe(-1);
        expect(response.statusCode).toBe(200);
    });
  });

describe('GET /', function() {
    it('respond with json', async() => {
    const response = await request(app).get('/');
    expect(response.body).toBe('Hello World!');
    });
  });