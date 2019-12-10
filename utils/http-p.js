//讲回调函数写法改成promise
import {
  config
} from '../config.js';
class Http {
  request({url,data={},method = 'GET'}) {
    return new Promise((resolve,reject)=>{
      this._request(url,resolve, reject,data,method)
    })
  }
  _request(url, resolve, reject,data={},method='GET') {
    var url = config.appBase + url;
   
    if (!method) {
      method = "GET";
    }
    wx.request({
      url: url,
      method: method,
      data:data,
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        const code = res.statusCode.toString();
        if (code.startsWith('4')) {
          reject(res.data)
        } else {
          resolve(res.data);
        }

      },
      fail: error => {reject()}
    })
  }
}



module.exports = {
  Http: Http,
}