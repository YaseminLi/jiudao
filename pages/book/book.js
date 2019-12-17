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
    bookModel.getBookDetail(
      (data) => {
        this.setData({
          hotList: data
        })
      }
    )
  },
  onBookDetail: function(event) {
    let id = event.currentTarget.dataset.id
    // 两种场景下跳转到书籍详情页：一是精选页面，而是搜索结果页面id=event.detail.id
    id=id?id:event.detail.id
    let data=this.data.hotList.find(item=>item.id==id)
    const that=this
      if (data) {
        wx.navigateTo({
          url: '/pages/book-detail/book-detail?id=' + id, events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            // 被打开页面进行回调
            changeLikeCount: function (data) {
              let hotList=that.data.hotList
              hotList.forEach(item=>{
                if(item.id==data.id){
                  item.fav_nums=data.likeCount
                }
              })
              that.setData({
                hotList
              })
            }
          },
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
  },
  onToggleLike(){
    console.log(detail)
  }
})