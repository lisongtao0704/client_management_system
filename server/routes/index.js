var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/login', urlencodedParser,function (req, res) {
  var response = {
       "first_name":req.body.id,
       "last_name":req.body.pw
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

module.exports = router;