import {
  Http
} from "../utils/http-p.js";
class KeywordModel extends Http {
  key = 'q';
  maxLength=10;
  getHistorySearch() {
    //用缓存
   return  wx.getStorageSync(this.key)
  }
  getHotKeyword() {
    return this.request({ url: '/book/hot_keyword' });
  }
  getSearch(){
    return this.request({ url: '/book/search'});
  }
  addInputToHistory(keyword){
    let history=this.getHistorySearch();
    if(!history){
      history=[keyword];
      wx.setStorageSync(this.key, history)
    }
    if(!history.includes(keyword)){
        //缓存最多储存10个历史搜索项
      if(history.length>this.maxLength-1){
        history.pop();
      }
      history.unshift(keyword);
      wx.setStorageSync(this.key, history)
    }
  }
};
export {
  KeywordModel
};