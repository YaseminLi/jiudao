import {
  BookModel
} from '../../api/book.js';
const bookModel = new BookModel();
Page({
  data: {
    hotList: '',
    showSearch: false,
    // more: false
  },
  onLoad: function(options) {
    bookModel.getHotList(
      (data) => {
        this.setData({
          hotList: data
        })
      }
    )
  },
  onBookDetail: function(event) {
    let id = event.currentTarget.dataset.id
    //两种场景下跳转到书籍详情页：一是精选页面，而是搜索结果页面id=event.detail.id
    id=id?id:event.detail.id
    bookModel.getBookDetail(id, (data) => {
      if (data) {
        wx.navigateTo({
          url: '/pages/book-detail/book-detail?id=' + id,
            success: function(res) {
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('acceptDataFromOpenerPage', data)
            }
        })
      } else {
        wx.showToast({
          title: '暂时没有详情！',
          icon: "none"
        })
      }
    })

  },
  onShowSearch: function(event) {
    const showSearch = this.data.showSearch;
    this.setData({
      showSearch: !showSearch
    })
  },
  onReachBottom() {
    wx.showToast({
      title: '没有更多数据了！',
      icon: 'none'
    })
  }
})