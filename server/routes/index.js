var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var token_info=require('../database/users')
router.post('/login', urlencodedParser,function (req, res) {
  var user_info=token_info.objInfo.userInfo[0]
  var response = {
       "user_id":req.body.id,
       "user_pw":req.body.pw
   };
   console.log(response);
   if(response.user_id==user_info.usernumber&&response.user_pw==user_info.userpwd){
     res.send({'code':true})
     res.end();
   }else{
    res.end("账号或密码有误");
   }
   
})

module.exports = router;