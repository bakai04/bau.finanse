const path = require('path');

module.exports = {
  module: {
    resolve: {
      // extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@$': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Поддержка файлов с расширением '.js' и '.jsx'
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // Используйте Babel для транспиляции кода
          },
        },
      ],
    },
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          typescript: true,
          ext: "tsx",
        }
    },
  ],
    rules: [
      {
        test: /\.module.scss$/,
        use: [
          { 
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack', 
          'svg-url-loader',
        ],
      },
    ],
  },
};