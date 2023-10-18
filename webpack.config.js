const path = require('path')
// 노드 js 경로

module.exports = {
  entry: path.resolve(__dirname, './src'), // 시작점 설정,  절대 경로로 __dirname 웹팩 콘피그 기준으로 경로 만들어줌
  output: {
    // 빌드한 결과물을 어디에 생성할 것 인가
    filename: 'bundle.[hash].js', // hash 값 추가
    path: path.resolve(__dirname, './dist'), //dist라는 폴더로 뱉어줌
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js'], // ghk
  },
} // 노드 js가 기본으로 채택한 es5문법으로 번들링이 필요 없다.
// 보통 설정 파일들을 번들링 할 필요가 있나? 없다.

//Webpack이란 모듈 번들러 js파일들을 묶거나 난독화를 이용하여 압축하는 등의 일을 할 수 있게 도와줍니다.

//필요한 모듈
//노션 참고


//webpack.config.js
//entry: 빌드의 시작점
//output: 빌드된 파일이 어디에 위치할지
//module: 웹팩의 동작에 도움을 주는 loader들이 위치
//extensions: import 시 생략 가능한 확장자들을 정의