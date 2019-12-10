
const db = wx.cloud.database()
class BookModel {
  getHotList(sCallback) {
    db.collection('bookList').get().then(res => {
      sCallback(res.data)
    })
  }
  getBookDetail(id, sCallback) {
    id = id - 0 //字符串类型转化为number类型
    db.collection('bookDetail').where({
      id: id  
    }).get({
        success: function (res) {
          sCallback(res.data[0])
        }
      })
  }
}
export {
  BookModel
}