var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Fitbit Gamification' });
});

module.exports = router;
