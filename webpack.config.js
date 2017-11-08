import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    "@babel/stage-0",
                    ["@babel/env", {
                        "targets": {
                            "browsers": ["last 2 versions"]
                        }
                    }]
                ],
                plugins: ['@babel/transform-runtime'],
                cacheDirectory: true
              }
            }
          }
        ]
      }
};
