import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    // can add hot reloading, catching errors, linting styles
    // BUG - css not injected in browser-syc
    // BUG - 2 local dev servers running - 3000 and 9000
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: [
        './**/*.js',
        './**/*.html',
        './**/*.css'
      ],
      server: { baseDir: ['src'] },
      // proxy: 'http://localhost:3100/'
    },{reload:false})
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
