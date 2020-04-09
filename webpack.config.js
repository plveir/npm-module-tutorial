module.exports = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      }
    ]
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js'],
  }
}