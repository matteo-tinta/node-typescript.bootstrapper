const path = require('path');
const { NODE_ENV = 'production' } = process.env;

let configs = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
            test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}

module.exports = configs
