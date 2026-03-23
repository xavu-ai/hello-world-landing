const request = require('supertest');
const app = require('../../src/server');

describe('Static File Integration Tests', () => {
  describe('GET /', () => {
    test('returns 200 with index.html content', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.text).toContain('<!DOCTYPE html>');
      expect(res.text).toContain('Hello World Landing');
    });

    test('Content-Type header is text/html for root', async () => {
      const res = await request(app).get('/');
      expect(res.headers['content-type']).toMatch(/text\/html/);
    });
  });

  describe('GET /*', () => {
    test('GET /nonexistent returns 404', async () => {
      const res = await request(app).get('/nonexistent');
      expect(res.status).toBe(404);
    });

    test('GET /nonexistent returns 404.html content', async () => {
      const res = await request(app).get('/nonexistent');
      expect(res.text).toContain('404');
      expect(res.text).toContain('Page Not Found');
    });
  });
});
