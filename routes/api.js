var express = require('express');
//var User = require('../app/models/User.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "Welcome to the api"})
});

router.get('/user', function(req, res, next){
	res.send(User.find({}));
});

module.exports = router;
