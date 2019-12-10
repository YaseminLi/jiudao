import {
  Http
} from "../utils/http-p.js";
class BookModel extends Http {
  getHotList() {
    return this.request({url:"/book/hot_list"});
  }
  getBookDetail(id) {
    return this.request({url:`/book/${id}/detail`});
  }
  getShortComment(id) {
    return this.request({url:`/book/${id}/short_comment`});
  }
  getLikeStatus(id) {
    return this.request({url:`/book/${id}/favor`});
  }
  postBookComment(bid, content) {
    return this.request({
      url: '/book/add/short_comment',
      method: 'POST',
      data: {
        book_id:bid,
        content: content,
      }
    });
  }
};
export {
  BookModel
};