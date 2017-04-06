var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //   res.send('<p class=\"node_p\">Hello World</p>')
  //   res.send(JSON.parse(req))
});



/*module.exports=function(app){
  require('./register')(app);
};*/



module.exports = router;
