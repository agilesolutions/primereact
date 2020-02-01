var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg']
      },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  require.resolve('style-loader'),
                  {
                    loader: require.resolve('css-loader')
                  }
                ],
              },        	
              {
                  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                  loader: 'url-loader?limit=100000'
                },
                {
                  test: /\.(ico|jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                  loader: "file-loader"
                },
              
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [
                    {loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"]
                    }
                }]
            }
        ]
    }
};