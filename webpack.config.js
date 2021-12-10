
module.exports = (webpackConfigEnv, argv) => {
    return {
        entry: {
            index: {
                import: './src/index.tsx',
                library: {
                    type: 'umd'
                }
            }
        },
        mode: 'production',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|gif|jpg|jpeg)$/,
                    use: ['file-loader']
                }
            ]
        }
    }
}
