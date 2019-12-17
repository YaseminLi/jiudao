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
  onShowList: function() {
    let status = !this.data.showClassic
    this.setData({
      showClassic: status
    })
  },
  onBookDetail:function(event){
let id=event.currentTarget.dataset.id
let data=this.data.bookFavorList.find(item=>item.id==id)
        wx.navigateTo({
          url: '/pages/book-detail/book-detail?id=' + id,
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', data)
          }
        })
  },
  onClassicDetail: function (event) {
    let id = event.currentTarget.dataset.id
    let data=this.data.classicFavorList.find(item=>item.id==id)
      wx.navigateTo({
        url: '/pages/classic-detail/classic-detail',
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', data)
        }
      })
  },
  onShow: function () {
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
  }
})