var express = require('express');
var app = express();
var indexRouter = require('./routes/index.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//连接数据库
var info=require('./database/users.js')

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'userdb'
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err);
//     return;
//   }
//   console.log('-------------');
//   console.log('MySQL服务启动');
//   console.log('-------------');
// });
// connection.query('select * from userinfo', function (error, results, fields) {
//   if (error) throw error;
//   console.log('查询数据 ', results);
// });
// connection.end();
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 路由中间件
app.use('/', indexRouter);
 
var server = app.listen(8081,"127.0.0.1",function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})