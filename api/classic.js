const db = wx.cloud.database()
class ClassicModel {
  getLatest(index, sCallback) {
    db.collection('classicLatest')
      .get().then(res => {
        sCallback(res.data[0])
        this._setLatestIndex(res.data[0].index);
        wx.setStorageSync(this._getKey(res.data[0].index), res.data[0])
      })

  }
  getClassic(nextOrPrevious, index, sCallback) {
    index = nextOrPrevious == 'next' ? index + 1 : index - 1
    let key = this._getKey(index);
    let classic = wx.getStorageSync(key);
    if (!classic) {
      db.collection('cla').where({
        index: index,
      }).get({
        success: function (res) {
          sCallback(res.data[0]);
          wx.setStorageSync(key, res.data[0])
        }
      })
    } else {
      sCallback(classic)
    }

  }
  getClassicLikeStatus(index, category, sCallback) {
    db.collection('cla').where({
      index: index,
      type: category
    }).get({
      success: function (res) {
        sCallback(res.data[0])
      }
    })
  }
  like(behavior,index,favNums,sCallback) {
    let newFavNums = behavior == "like" ? favNums + 1 : favNums - 1;
    let status = behavior == "like" ?  1 : 0;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'like',
      // 传给云函数的参数
      data: {
        index:index,
        like_status:status,
        fav_nums:newFavNums
      }
    }).then(() => {
      let data={
        nums:newFavNums,
        like_status:status
      }
      sCallback(data)
    })

  }
  getMyfavor(sCallback) {
    db.collection('cla').where({
      "like_status": 1
    }).get({
      success: (res) => {
        sCallback(res.data)
      }
    })
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
  isFirst(index) {
    var index = index == 1 ? true : false;
    return index;
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    var index = index == latestIndex ? true : false;
    return index;
  }
}
export {
  ClassicModel
}