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
  getSearch(sCallback) {
    db.collection('searchResult').where({
      author:"[日] 东野圭吾"
    }).get({
        success: function(res){
          sCallback(res.data)
          console.log(res.data)
        },
        
    })}
  addInputToHistory(keyword) {
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