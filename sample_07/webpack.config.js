module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.pcss/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: { plugins: [
                        require('postcss-import'),
                        require('postcss-nested'), 
                    ]},
                },
            ],
        }]
    }
};