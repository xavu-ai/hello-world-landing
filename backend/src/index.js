// Entry point for production startup
const app = require('./server');

app.listen(process.env.PORT || 3000, () => {
  console.log('Hello World Landing Backend starting...');
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

// Export app for testing
module.exports = app;
