const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'element.bundle.js',
    path: path.resolve(__dirname, 'public/script'),
    clean: true,
  },
};