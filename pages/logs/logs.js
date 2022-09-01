// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad(opts) {
    console.log('log onLoad')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opts.color,
    })
  },
  onShow: function() {
    console.log('log onShow')
  },
  onReady: function() {
    console.log('log onReady')
  },
  onHide: function() {
    console.log('log onHide')
  },
  onUnload: function() {
    console.log('log onUnload')
  },
  onPullDownRefresh: function() {
    console.log('log onPullDownRefresh')
  },
  onReachBottom: function() {
    console.log('log onReachBottom')
  },
  onShareAppMessage: function () {
    console.log('log onShareAppMessage')
  },
  onPageScroll: function() {
    console.log('log onPageScroll ')   
  },
  onResize: function() {
    console.log('log onResize')
  },
  onlogTap: function() {
    //navigateTo是push一个页面
    // wx.navigateTo({
    //   url: '/pages/test2/test2',
    // });
    //redirectTo是销毁当前页面，然后push一个页面
    wx.redirectTo({
      url: '/pages/test2/test2',
    });
  }
})
