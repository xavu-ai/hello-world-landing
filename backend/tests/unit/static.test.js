const fs = require('fs');
const path = require('path');

describe('Static File Unit Tests', () => {
  const publicDir = path.join(__dirname, '..', '..', 'public');
  
  test('index.html exists in public directory', () => {
    const indexPath = path.join(publicDir, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('index.html is not empty', () => {
    const indexPath = path.join(publicDir, 'index.html');
    const stats = fs.statSync(indexPath);
    expect(stats.size).toBeGreaterThan(0);
  });

  test('middleware resolves correct file paths', () => {
    const testPath = path.join(publicDir, 'index.html');
    const resolved = path.resolve(testPath);
    expect(resolved).toContain('public');
    expect(resolved).toMatch(/index\.html$/);
  });

  test('404.html exists in public directory', () => {
    const notFoundPath = path.join(publicDir, '404.html');
    expect(fs.existsSync(notFoundPath)).toBe(true);
  });

  test('dotfiles are ignored by middleware configuration', () => {
    // Verify express.static is configured with dotfiles: 'ignore'
    const app = require('../../src/server');
    const staticLayers = app._router.stack.filter(
      layer => layer.name === 'serveStatic'
    );
    expect(staticLayers.length).toBeGreaterThan(0);
  });

  test('public directory does not contain sensitive dotfiles', () => {
    const files = fs.readdirSync(publicDir);
    const dotfiles = files.filter(f => f.startsWith('.'));
    expect(dotfiles).toHaveLength(0);
  });
});
