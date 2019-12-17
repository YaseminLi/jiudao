const db = wx.cloud.database()
class BookModel {
  //精选列表数据
  // getHotList(sCallback) {
  //   db.collection('bookList').get().then(res => {
  //     sCallback(res.data)
  //   })
  // }
  //书籍详情
  getBookDetail(sCallback) {
    // id = id - 0 //字符串类型转化为number类型
    db.collection('bookDetail').get({
      success: function(res) {
        if (res.data.length > 0) {
          sCallback(res.data)
        } else {
          sCallback(null)
        }
      }
    })
  }
  //获取评论
  getBookComment(id, sCallback) {
    db.collection('bookComment').where({
      id: id - 0
    }).get({
      success: function(res) {
        sCallback(res.data[0].comment)
      }
    })
  }
  //获取点赞情况
  // getBookFavor(id, sCallback) {
  //   db.collection('bookList').where({
  //     id: id - 0
  //   }).get().then(res => {
  //     sCallback(res.data[0])
  //   })
  // }
  //提交评论
  //提交点赞
  bookLike(behavior, index, favNums, sCallback) {
    let newFavNums = behavior == "like" ? favNums - 1 : favNums + 1;
    let status = behavior == "like" ? 0 : 1;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'bookLike',
      // 传给云函数的参数
      data: {
        index: index,
        like_status: status,
        fav_nums: newFavNums
      }
    }).then(() => {
      let data = {
        nums: newFavNums,
        like_status: status
      }
      sCallback(data)
    })

  }
  getMyfavorBook(sCallback) {
    db.collection('bookDetail').where({
      "like_status": 1
    }).get({
      success: (res) => {
        sCallback(res.data)
      }
    })
  }
}


export {
  BookModel
}