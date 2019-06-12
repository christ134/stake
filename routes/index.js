var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/about',(req,res)=>{
  res.render('about', { title: 'About'});
});
router.get('/HelloAlert',(req,res)=>{
  res.render('HelloAlert', { title: 'Hello'});
});
router.get('/form',(req,res)=>{
  res.render('form', { title: 'Form'});
});

module.exports = router;
