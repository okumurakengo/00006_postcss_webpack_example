module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.pcss/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1, // importするときに適用するloaderの数を設定、sassとpostcssを使っていた場合は「2」と設定する
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: { plugins: [require('postcss-nested')] },
                },
            ],
        }]
    }
};