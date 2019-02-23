module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.pcss/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }]
    }
};
