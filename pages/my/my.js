// pages/my/my.js
import {
  ClassicModel
} from '../../api/classic.js';
import {
  BookModel
} from '../../api/book.js';
let classicModel = new ClassicModel();
let bookModel = new BookModel();
Page({
  data: {
    classicFavorList: null,
    showClassic: true,
    classicFavorNum:'',
    bookFavorList: null,
    bookFavorNum: ''
  },
  onLoad: function(options) {
    classicModel.getMyfavorClassic(data => {
      this.setData({
        classicFavorList: data,
        classicFavorNum: data.length
      })
    })
    bookModel.getMyfavorBook(data => {
      this.setData({
        bookFavorList: data,
        bookFavorNum: data.length
      })
    })
  },
  onShowList: function() {
    let status = !this.data.showClassic
    this.setData({
      showClassic: status
    })
  },
  onBookDetail:function(event){
let id=event.currentTarget.dataset.id
    bookModel.getBookDetail(id, (data) => {
        wx.navigateTo({
          url: '/pages/book-detail/book-detail?id=' + id,
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', data)
          }
        })
    })
  },
  onClassicDetail: function (event) {
    let id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/classic-detail/classic-detail?id=' + id,
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', data)
        }
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})