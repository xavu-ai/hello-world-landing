// Entry point for production startup
// Use: npm start
const app = require('./server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Hello World Landing Backend starting...');
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
