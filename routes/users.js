let express = require('express');
let router = express.Router();

let business = require('../business/user');

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.redirect("/login")
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Fitbit Gamification' });
});

/* GET Sign up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Fitbit Gamification' });
});

router.post('/login', function (req, res) {
  let details = {
    email: req['body']['username'],
    password: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(req['body']['password']))
  };

  business.login(details, function (err) {
    if (err){
      res.send({
        'message': err.message,
        'err': err
      });
    } else{
      res.send({
        'message': "Login successful",
        'err': null
      });
    }
  });
});

router.post('/signup', function (req, res) {
  let details = {
    firstname: req['body']['fname'],
    lastname: req['body']['lname'],
    email: req['body']['email'],
    password: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(req['body']['password'])),
    age: req['body']['age']
  };

  business.signup(details, function (err, message) {
    if (err){
      res.send({
        'message': err.message,
        'err': err
      });
    } else{
      res.send({
        'message': "Signup successful ",
        'err': null
      });
    }
  });
});

module.exports = router;
