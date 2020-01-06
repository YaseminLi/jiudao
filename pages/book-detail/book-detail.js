import {
  BookModel
} from '../../api/book.js';
const bookModel = new BookModel();
let imageLoad=false
Page({
  data: {
    detail: '',
    comment: '',
    likeStatus: '',
    likeCount: '',
    posting: false,
    inputValue: '',
    showPage:false
  },
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    const id = options.id;
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      that.setData({
        detail: data,
        likeStatus: data.like_status,
        likeCount: data.fav_nums
      })
    })
    bookModel.getBookComment(id, (data) => {
      this.setData({
        comment: data,
      })
      if (imageLoad &&this.data.comment.length>0) {
        console.log('comment load')
        this.setData({
          showPage:true
        })
        wx.hideLoading()
      }
    })
  },
  onBookLike: function(event) {
    let behavior = event.detail.behavior
    bookModel.bookLike(behavior, this.data.detail.id, this.data.likeCount, (data) => {
      this.setData({
        likeCount: data.nums,
        likeStatus: data.like_status == 0 ? false : true
      })
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.emit('changeLikeCount', {
        likeCount: this.data.likeCount,
        id: this.data.detail.id
      });
    });

  },
  onFakePost: function(event) {
    this.setData({
      posting: !this.data.posting
    })
  },
  onShareAppMessage: function() {
    return {
      title: '旧岛',
      path: this.data.detail.image
    }
  },
  onImageLoad:function(){
   imageLoad=true
    if (imageLoad && imageLoad && this.data.comment.length > 0) {
      console.log('image load')
      this.setData({
        showPage: true
      })
      wx.hideLoading()
    }
  }
})