// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('bookDetail').where({
    id: event.index
  }).update({
    data: {
      like_status: event.like_status,
      fav_nums: event.fav_nums
    }
  })
}