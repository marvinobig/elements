const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'script/element.bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: false,
  },
};