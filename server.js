import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  contentBase: 'dist',
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
});
server.listen(8080, 'localhost');
