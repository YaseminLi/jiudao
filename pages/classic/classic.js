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
    likeCount: ''
  },
  onLoad: function(options) {
    let index = this.data.classic.index;
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
        likeStatus:data.like_status
      })
    });
  },
  onNext: function(event) {
    this._updateClassic("next")
  },
  onPrevious: function(event) {
    this._updateClassic("previous")
  },
  onShare:function(){
    console.log('share')
    wx.showShareMenu({
      withShareTicket: true
    })
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
        likeCount: data.fav_nums
      })
    })
  }
})