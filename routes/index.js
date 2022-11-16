const { Router } = require('express');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postProduct1', function (req, res,next) {
 // console.log(JSON.stringify(req.body))
  
  let resposneObj = req.body
  resposneObj.status="successfull"
  res.send(resposneObj)
})


module.exports = router;
