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
                        sourceMap: true,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: { 
                        sourceMap: true,
                        plugins: [ require('postcss-nested') ] 
                    },
                },
            ],
        }]
    }
};
