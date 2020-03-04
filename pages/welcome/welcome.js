Page({
  onTap: function () {
    // console.log('onTap')
    //跳转到其他页面，可以返回上一页面,此页面hide
    // wx:wx.navigateTo({
    //   url: '../posts/posts',
    // })
    //跳转到有tab标签的页面
    wx.switchTab({
      url: '../classic/classic',
    })
  },
  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
    // console.log('welcome hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('welcome unload')
  },
})