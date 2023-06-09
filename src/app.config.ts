export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/webview/index',
    'pages/dispatcher/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle:'custom',
  }
})
