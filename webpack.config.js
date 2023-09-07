// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
// 웹팩의 구성옵션을 지정하는 파일
module.exports = {
  // 파일의 진입점 설정 / 파일을 읽어들이기 시작하는 지점 (자바스크립트 파일을 진입점으로 사용)
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  // 기본 값은 dist이다
  // filename 또한 entry값이 기본 값으로 들어온다
  output: {
    // 절대경로를 필요로한다. 상대경로를 입력하면 안된다
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        // .은 임의의 한글자를 뜻하기 때문에 실제로 확장자를 나타내기 위한 .을 사용하기 위해 \. 을 사용
        // scss와 css 둘다 읽기 위해서 s? 를 사용하고 s가 있을수도 있고 없을수도 있다는 의미 / $는 해당 글자로 끝나는 것을 의미
        test: /\.s?css$/,
        use: [
          // 순서 중요함 style-loader부터 적고 css-loader를 적어야 함
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}