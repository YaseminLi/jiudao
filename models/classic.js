import {
  Http
} from "../utils/http.js";
class ClassicModel extends Http {
  getLatest(index, sCallback) {
    this.request({
      url: "/classic/latest",
      success: (res) => {
        sCallback(res.data);
        this._setLatestIndex(res.data.index);
        wx.setStorageSync(this._getKey(res.data.index), res.data)
      }
    });

  }
  isFirst(index) {
    var index = index == 1 ? true : false;
    return index;
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    var index = index == latestIndex ? true : false;
    return index;
  }
  getClassic(nextOrPrevious, index, sCallback) {
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    let classic = wx.getStorageSync(key);
    if (!classic) {
      this.request({
        url: "/classic/" +index+"/" +nextOrPrevious,
        success: (res) => {
          sCallback(res.data);
          wx.setStorageSync(this._getKey(res.data.index), res.data)
        }
      })
    }else{
      sCallback(classic)
    }

  }
  _setLatestIndex(index) {
    wx.setStorageSync("latest", index)
  }
  _getLatestIndex() {
    let index = wx.getStorageSync("latest");
    return index;
  }
  _getKey(index) {
    let key = "classic-" + index;
    return key;
  }
};
export {
  ClassicModel
};