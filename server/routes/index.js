var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var token_info=require('../database/users')
router.post('/login', urlencodedParser,function (req, res) {
  var user_info=token_info.objInfo.userInfo[0]
  var response = {
       "service_id":req.body.id,
       "service_pwd":req.body.pwd,
       "service_token":req.body.token_id
   };
   console.log(response);
   if(response.service_token==user_info.service_id){
    res.send({'code':true,'login_way':"token验证成功"});
    res.end();
   }else {
     if(response.service_id==user_info.service_number&&response.service_pwd==user_info.service_pwd){
     res.send({'code':true,'token_id':user_info.service_id})
     res.end();
   }else{
    res.end("登录信息有误");
   }
   }
})

module.exports = router;