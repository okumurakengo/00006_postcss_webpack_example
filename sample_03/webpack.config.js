const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/style.pcss',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].css', // 生成するjsファイル名
    },
    module: {
        rules: [{
            test: /\.pcss/,
            use: ExtractTextPlugin.extract({
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [ require('postcss-nested') ] },
                    },
                ]
            }),
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'), // cssファイルを生成されたjsファイルと同じ名前にし上書きする -> cssファイルのみ出力という結果になる
    ],
};
