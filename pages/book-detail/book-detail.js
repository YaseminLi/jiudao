import {
  BookModel
} from '../../api/book.js';
const bookModel = new BookModel();
Page({
  data: {
    detail: '',
    comment: '',
    likeStatus: '',
    likeCount: '',
    posting: false,
    inputValue: ''
  },
  onLoad: function(options) {
    const that=this
    const id = options.id;
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.setData({
        detail:data,
        likeStatus:data.like_status,
        likeCount:data.fav_nums
      })
    })
    bookModel.getBookComment(id,(data)=>{
      this.setData({
        comment:data
      })
    })
  },
  onBookLike:function(event){
let behavior=event.detail.behavior
    bookModel.bookLike(behavior, this.data.detail.id, this.data.likeCount, (data) => {
      this.setData({
        likeCount: data.nums,
        likeStatus: data.like_status == 0 ? false : true
      })
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.emit('changeLikeCount', { likeCount: this.data.likeCount, id: this.data.detail.id });
    });
    
  },
  onFakePost: function(event) {
    this.setData({
      posting: !this.data.posting
    })
  },
  onShareAppMessage: function () {
    return {
      title: '旧岛',
      path: this.data.detail.image
    }
  }
  // onPost: function(event) {
  //   const comment = event.detail.comment || event.detail.value;
  //   if (comment.length > 12) {
  //     wx.showToast({
  //       title: '短评最多12个字',
  //       icon: 'none'
  //     })
  //   }
  //   const id = this.data.detail.id;
  //   // 新增评论接口调用
  //   bookModel.postBookComment(id, comment)
  //     .then(data => {
  //       console.log('postcomment');
  //       wx.showToast({
  //         title: '短评提交成功！',
  //         icon: "none"
  //       });
  //       //新增评论接口调用成功后的操作，暂放在这里
  //       if (this.data.comment) {
  //         this.data.comment.unshift({
  //           content: comment,
  //           nums: 1
  //         });
  //       } else {
  //         this.data.comment = [{
  //           content: comment,
  //           nums: 1
  //         }]
  //       }
  //       this.setData({
  //         inputValue: '',
  //         posting: !this.data.posting,
  //         comment: this.data.comment
  //       })
  //     })

  // }
})