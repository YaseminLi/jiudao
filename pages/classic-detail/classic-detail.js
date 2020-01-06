import {
  ClassicModel
} from '../../api/classic.js';
let classicModel = new ClassicModel();
Page({
  data: {
    classic: '',
    likeStatus: false,
    likeCount: '',
    showPage:false
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    let index = options.id;
    const eventChannel = this.getOpenerEventChannel()
    const that=this
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.setData({
        classic: data,
        likeCount:data.fav_nums,
        likeStatus:data.like_status
      })
    })
  },
  onLike: function (event) {
    let behavior = event.detail.behavior;
    classicModel.like(behavior, this.data.classic.index, this.data.likeCount, (data) => {
      this.setData({
        likeCount: data.nums,
        likeStatus: data.like_status == 0 ? false : true
      })
    });
  },
  onShare: function () {
    console.log('share')
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onImageLoad:function(){
  
    this.setData({
      showPage:true
    })
    wx.hideLoading()
  }
})