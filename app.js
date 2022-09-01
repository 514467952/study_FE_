// app.js
App({
  onLaunch(opts) {
    console.log("小程序启动")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow: function() {
    console.log("小程序展示")
  },
  onHide: function() {
    console.log("小程序隐藏")
  },
  onUnload: function() {
    console.log("小程序退出")
  },
  globalData: {
    userInfo: null
  }
})
