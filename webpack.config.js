
module.exports = (webpackConfigEnv, argv) => {
    return {
        entry: './src/index.tsx',
        mode: 'production',
        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        },
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
