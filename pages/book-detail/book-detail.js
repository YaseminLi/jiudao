import {
  BookModel
} from '../../api/book.js';
const bookModel = new BookModel();
Page({
  data: {
    detail: '',
    comment: '',
    likeStatus: false,
    likeCount: '',
    posting: false,
    inputValue: ''
  },
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    });
    const id = options.id;
    // const detail= bookModel.getBookDetail(id);
    // const comment = bookModel.getShortComment(id);
    // const likeStatus = bookModel.getLikeStatus(id);
    //并行请求，同时拿到结果
    // Promise.all([detail,comment,likeStatus]).then(res=>{
    //   this.setData({
    //     detail: res[0],
    //     comment: res[1].comment,
    //     likeStatus: res[2].like_status,
    //     likeCount: res[2].fav_nums
    //   });
    //   wx.hideLoading()
    // })
    bookModel.getBookDetail(id, (data) => {
      this.setData({
        detail: data,
        comment:data.comment
      })
      wx.hideLoading()
    })
  },
  onFakePost: function(event) {
    this.setData({
      posting: !this.data.posting
    })
  },
  onPost: function(event) {
    const comment = event.detail.comment || event.detail.value;
    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
    }
    const id = this.data.detail.id;
    // 新增评论接口调用
    bookModel.postBookComment(id, comment)
      .then(data => {
        console.log('postcomment');
        wx.showToast({
          title: '短评提交成功！',
          icon: "none"
        });
        //新增评论接口调用成功后的操作，暂放在这里
        if (this.data.comment) {
          this.data.comment.unshift({
            content: comment,
            nums: 1
          });
        } else {
          this.data.comment = [{
            content: comment,
            nums: 1
          }]
        }
        this.setData({
          inputValue: '',
          posting: !this.data.posting,
          comment: this.data.comment
        })
      })

  }
})