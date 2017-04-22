var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hw2/index', { title: 'Super Time Validator' });
});

module.exports = router;
