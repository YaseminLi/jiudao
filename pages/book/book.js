import {
  BookModel
} from '../../models/book.js';
const bookModel = new BookModel();
Page({
  data:{
    hotList:'',
    showSearch:false,
    more:false
  },
  onLoad: function(options) {
    bookModel.getHotList().then(data => {
      this.setData({hotList:data});
    })
  },
onBookDetail: function(event) {
    wx.navigateTo({
      url: '/pages/book-detail/book-detail?id='+ event.currentTarget.dataset.id,
    })
  },
  onShowSearch:function(event){
    const showSearch=this.data.showSearch;
    this.setData({showSearch:!showSearch})
  },
onReachBottom(){
  this.setData({more:this.data.more})
}
})