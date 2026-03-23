const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static file serving — index.html at root
// Path traversal protection via express.static options
app.use(express.static(path.join(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: ['index.html']
}));

// Explicit root route handler (ensures / returns index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Only start server if run directly (not imported for testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
