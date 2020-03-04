import { config } from '../config.js';
class Http {
  request(params) {
      var url = config.appBase + params.url;

    if (!params.method) {
      params.method = "GET";
    }
    wx.request({
      url: url,
      method: params.method,
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        let code = res.statusCode.toString();
        if (code.startsWith('4')) {
          console.log("error:" + code)
        } else {
          params.success(res);
        }

      },
      fail: function (error) {
        console.log(error)
      }
    })
  }
}
module.exports = {
  Http: Http,
}