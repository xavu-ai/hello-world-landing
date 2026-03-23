const request = require('supertest');
const app = require('../src/server');

describe('Static File Serving', () => {
  // Happy paths
  test('GET / returns index.html', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>');
    expect(res.text).toContain('Hello World Landing');
  });

  test('GET /nonexistent returns 404', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.status).toBe(404);
  });

  // Edge cases - path traversal prevention
  test('GET /.. returns 404 (path traversal prevention)', async () => {
    const res = await request(app).get('/../etc/passwd');
    expect(res.status).toBe(404);
  });

  test('GET /%2e%2e returns 404 (encoded path traversal)', async () => {
    const res = await request(app).get('/%2e%2e/etc/passwd');
    expect(res.status).toBe(404);
  });
});
