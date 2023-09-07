module.exports = {
  // 일일이 입력해야하는 자바스크립트를 한번에 지원
  presets: ['@babel/preset-env'],
  // 비동기 처리를 위해 사용
  plugins: [
    // 배열안에 배열이 되어있는 2차원 배열이라고 함
    ['@babel/plugin-transform-runtime']
  ]
}