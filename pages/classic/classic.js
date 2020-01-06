import {
  ClassicModel
} from '../../api/classic.js';
let classicModel = new ClassicModel();
Page({
  data: {
    classic: '',
    latest: true,
    first: false,
    likeStatus: false,
    likeCount: '',
    showPage:false
  },
  onLoad: function(options) {
    let index = this.data.classic.index;
    wx.showLoading({
      title: '加载中',
    })
    classicModel.getLatest(index, (data) => {
      this.setData({
        classic: data,
        likeStatus: data.like_status,
        likeCount: data.fav_nums
      });
      this._getLikeStatus(data.index, data.type)
    });
  },
  onLike: function(event) {
    let behavior = event.detail.behavior;
    classicModel.like(behavior, this.data.classic.index,this.data.likeCount,(data) => {
      this.setData({
        likeCount: data.nums,
        likeStatus:data.like_status==0?false:true
      })
    });
  },
  onNext: function(event) {
  
    this.setData({
      showPage: false
    })
    wx.showLoading({
      title: '加载中',
    })
    this._updateClassic("next")
  },
  onPrevious: function(event) {
    this.setData({
      showPage: false
    })
    wx.showLoading({
      title: '加载中',
    })
    this._updateClassic("previous")
  },
  _updateClassic: function(nextOrPrevious) {
    let index = this.data.classic.index;
    this.setData({
      classic: {
        type: 0
      }
    });
    classicModel.getClassic(nextOrPrevious, index, (data) => {
      this._getLikeStatus(data.index, data.type)
      this.setData({
        classic: data,
        likeStatus: data.like_status,
        likeCount: data.fav_nums,
        first: classicModel.isFirst(data.index),
        latest: classicModel.isLatest(data.index)
      })
    });
  },
  _getLikeStatus: function(index, category) {
    classicModel.getClassicLikeStatus(index, category, (data) => {
      this.setData({
        likeStatus: data.like_status,
        likeCount: data.fav_nums,

      })
    })
  },
  onImageLoad:function(){
    this.setData({
      showPage:true
    })
    wx.hideLoading()
  },
  onShareAppMessage:function(){
    return {
      title: '旧岛'
    }
  }
})