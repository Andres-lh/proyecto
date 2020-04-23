var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');
router.use(csrfProtection);

router.get('/user/signup', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signup', passport.authenticate('local.signup', {
  //successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}), (req, res, next) => {
  res.redirect('/user/profile');
});


router.get('/user/signin', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  failureRedirect: '/user/signin',
  failureFlash: true
}), (req, res, next) => {
  res.redirect('/user/profile');
});

router.get('/user/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  res.redirect('/');
})



router.get('/user/profile', isLoggedIn, (req, res, next) => {
  res.render('user/profile');
});



module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
}