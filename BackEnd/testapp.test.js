const request = require('supertest');

const app = require('./index.js');
const jwt = require('jsonwebtoken');


test('GET / should return "Hello Qler"', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello Qler');
});

const secretKeys = '12345';
describe('GET /createToken/:admin', () => {
  test('should return a JWT token', async () => {
    const res = await request(app).get('/createToken/Qler').expect(200);
    // expect(response.statusCode).toBe(200);
    console.log(res.text);
    const decoded = jwt.verify(res.text, secretKeys)
    expect(decoded.admin).toBe('Qler');
  });
});

