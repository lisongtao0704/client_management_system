var mysql = require("mysql");
var dbConfig = require('./dbConfig');
var querySql = require('./querysql');
var connection = mysql.createConnection(dbConfig.mysql);
var objInfo={
    userInfo:{}
}

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }
  console.log('-------------');
  console.log('MySQL服务启动');
  console.log('-------------');
});
connection.query(querySql.sql.query, function (error, results, fields) {
  if (error) throw error;
  objInfo.userInfo=results
});
connection.end();
module.exports={
    objInfo
}