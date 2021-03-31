var express = require('express');
var mysql = require("mysql");
var dbConfig = require('../database/dbConfig');
var querySql = require('../database/querysql');
var connection = mysql.createConnection(dbConfig.mysql);
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var token_info=require('../database/users')
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }
});
router.get('/',function(req,res){
  res.send("客户全生命周期管理系统————诵焘");
  res.end();
})
router.post('/login', urlencodedParser,function (req, res) {
  var connection=mysql.createConnection(dbConfig.mysql)
  connection.connect();
  connection.query('select * from service_info',function (error, results, fields) {
    if (error) throw error;
    console.log('查询用户表 ', results);
    token_info={objInfo:{userInfo:results}}
  })
  var response = {
    "service_id":req.body.id||null,
    "service_pwd":req.body.pwd||null,
    "service_token":req.body.token_id||null
};
var number_index;
if(response.service_id){
  let number=`SELECT service_id FROM (SELECT * FROM service_info WHERE service_number=${response.service_id}) a`
  connection.query(number, function (error, results, fields) {
    if (error) throw error;
    if(results[0]){
      number_index=results[0].service_id-1
      console.log('账号索引：', results[0].service_id);
      var user_info=token_info.objInfo.userInfo[number_index]
      if(response.service_id==user_info.service_number&&response.service_pwd==user_info.service_pwd){
        res.send({'code':true,'token_id':user_info.service_id})
        res.end();
      }else{
        res.send({'code':false,'login_way':"登录信息错误"});
         res.end();
      }
    }else{
      res.send({'code':false,'login_way':"登录信息错误"});
      res.end();
    }
  });
}else{
    if(response.service_token){
    let token=`SELECT service_id FROM (SELECT * FROM service_info WHERE service_id=${response.service_token}) a`
    connection.query(token, function (error, results, fields) {
      if (error) throw error;
      let token_id=results[0].service_id
      console.log(token_id)
      if(response.service_token==token_id){
        res.send({'code':true,'login_way':"token验证成功"});
        res.end();
       }
    });
    }else{
       res.send({'code':false,'login_way':"登录信息错误"});
       res.end();
    }
}

})
router.post('/sign', urlencodedParser,function (req, res) {
  var connection=mysql.createConnection(dbConfig.mysql)
  connection.connect();
  var response = {
       "service_name":req.body.name||null,
       "service_num":req.body.num||null,
       "service_pwd":req.body.pwd||null
   };

  let db_num=`SELECT * FROM service_info WHERE service_number=${response.service_num}`
  connection.query(db_num, function (error, results, fields) {
    if (error) throw error;
    if(results[0]){
      res.send({'sign':"手机号已被注册"})
      res.end();
    }else{
      let sign=`INSERT INTO service_info VALUES(null,${response.service_num},"${response.service_pwd}",null,"${response.service_name}")`
      connection.query(sign, function (error, results, fields) {
       if (error) throw error;
       console.log('插入注册数据 ', results);
     });
     connection.end();
     res.send({'sign':"注册成功"})
     res.end();
    }
  });
  
})
let id=0
router.post("/chat",urlencodedParser,function(req,res){

  var connection=mysql.createConnection(dbConfig.mysql)
  connection.connect();

  let chat="select id from (select * from chat_info order by id DESC limit 1) a"
  let timeOut=setInterval(() => {
    connection.query(chat,function(error, results, fields){
      if(results[0].id){
      if(id<results[0].id||req.body.status) {
      id=results[0].id
      let chat_all="select * from chat_info"
        connection.query(chat_all,function(error, results, fields){
        res.send({status:true,data:results})
        res.end()
        clearInterval(timeOut)
      })


    }else{
      id=results[0].id
    }
      }
    
  })
  }, 500);

  
})
module.exports = router;