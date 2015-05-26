module.exports = {
  entry: {
    'entry':'./src/main.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

