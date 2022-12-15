module.exports = {
    module: {
        rules: [
            {
                test: /\.(woff|ttf|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    }
}