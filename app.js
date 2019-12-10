App({
  globalData: {
    // g_isPlayingMusic:false,
    g_currentMusicPostId: null,
    doubanbase: 'http://t.yushu.im'
  },
  onLaunch: function(options) {
    wx.setStorageSync('isPlayingMusic', false);
    wx.cloud.init({
      env: "jiudao-server-yw8w2"
    })
  }
})