module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.scss/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: { plugins: [ require('autoprefixer') ] },
                },
                'sass-loader',
            ],
        }]
    }
};
