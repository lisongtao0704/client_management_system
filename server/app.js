var express = require('express');
var app = express();
var indexRouter = require('./routes/index.js');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'userdb'
});
connection.connect();
connection.query('select * from userinfo', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
connection.end();

app.use('/', indexRouter);
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})