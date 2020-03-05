const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
app.use(bodyParser.json())
const port = 3000;
const bookData = require('./book/hot_list');
const bookDetail = require('./book/book_detail');
const shortComment = require('./book/short_comment');
const likeStatus = require('./book/favor');
const hotKeyword = require('./book/hot_keyword');
const bookSearch = require('./book/search');
const classicData = require('./classic/classic');
const classicFavor = require('./classic/favor');
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
//获取最新一期
app.get('/classic/latest', function (req, res) {
   classicData.sort((a, b) => (b.index - a.index));
   res.send(classicData[0]);
})
//获取当前一期的下一期
app.get('/classic/:index/next', function (req, res) {
   const index = +req.params.index + 1;
   res.send(classicData.find((e) => e.index == index));
})
//获取当前一期的上一期
app.get('/classic/:index/previous', function (req, res) {
   const index = +req.params.index - 1;
   res.send(classicData.find((e) => e.index == index));
})
//获取热门书籍
app.get('/book/hot_list', function (req, res) {
   res.send(bookData);
})
//获取书籍详细信息
app.get('/book/:id/detail', function (req, res) {
   const id = req.params.id;
   res.send(bookDetail.find((e) => e.id == id));
})
//获取书籍的短评
app.get('/book/:id/short_comment', function (req, res) {
   const id = req.params.id;
   res.send(shortComment.find((e) => e.id == id));
})
//获取热搜关键字
app.get('/book/hot_keyword', function (req, res) {
   res.send(hotKeyword);
})
//获取书籍点赞状态
app.get('/book/:id/favor', function (req, res) {
   const id = req.params.id;
   res.send(likeStatus.find((e) => e.id == id));
})
//获取搜索结果
app.get('/book/search', function (req, res) {
   res.send(bookSearch.books.slice(0, 10));
})
app.post('/book/add/short_comment', urlencodedParser, function (req, res) {

   var response = req.body;
   res.send(response);
})
//获取喜欢的期刊
app.get('/classic/favor', function (req, res) {
   res.send(classicFavor);
})

//进行点赞
app.post('/like', urlencodedParser, function (req, res) {
   const request = req.body.index;
   console.log(request);

   const a = classicData.find((e) => e.index == request);
   console.log(a);
   a.like_status=1;
   a.fav_nums++;
   console.log(a);
   console.log(classicData);
   res.send('like post success');

})
//访问静态资源文件-图片
app.use('/images', express.static('images'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))