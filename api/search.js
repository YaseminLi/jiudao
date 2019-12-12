const db = wx.cloud.database()
const _ = db.command
class SearchModel {
  key = 'q';
  maxLength = 10;
  getHistorySearch() {
    //用缓存
    return wx.getStorageSync(this.key)
  }
  getHotKeyword(sCallback) {
    db.collection('hotKeyword').get().then(res => {
      sCallback(res.data[0].hotKeys)
    })
  }
  getSearch(q, sCallback) {
    let key = 'bookSearch-' + q
    const searchResult = wx.getStorageSync('bookSearch-' + q);
    if (searchResult) {
      sCallback(searchResult)
    } else {
      let that=this
      //mock数据，只能搜索东野圭吾
      db.collection('searchResult').where({
        author:'[日] '+q
      }).get({
        success: function(res) {
          if(res.data.length>0){
            sCallback(res.data)
            wx.setStorageSync(key, res.data)
            that._addInputToHistory(q)
          }else{
            sCallback("搜索目前只有\"东野圭吾\"能搜索到结果哦！")
          }
          
        }
      })
    }
  }
  _addInputToHistory(keyword) {
    let history = this.getHistorySearch();
    if (!history) {
      history = [keyword];
      wx.setStorageSync(this.key, history)
    }
    if (!history.includes(keyword)) {
      //缓存最多储存10个历史搜索项
      if (history.length > this.maxLength - 1) {
        history.pop();
      }
      history.unshift(keyword);
      wx.setStorageSync(this.key, history)
    }
  }
}
export {
  SearchModel
}