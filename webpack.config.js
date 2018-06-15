const path = require('path');
const outputDirectory = 'public/js';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.es', '.js', '.jsx', '.less', '.raw.less', '.scss', '.md', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /\.raw\.less$/
      },
      {
        test: /\.(js|jsx|es)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.(js|jsx|es)$/,
        include: [path.join(__dirname, './node_modules/@hg')],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'syntax-dynamic-import',
              'transform-runtime',
              'transform-object-rest-spread',
              'transform-class-properties'
            ],
            presets: ['react', 'env']
          }
        }
      }
    ]
  }
};
