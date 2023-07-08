var express = require('express');
var router = express.Router();
let tes = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('<h1>This is Express.js</h1>');
  if (tes){
    res.render("index",{
      title : "express"
    });
  }else{
    res.render("SignUp");
  }
});

module.exports = router;
