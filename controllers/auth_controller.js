const User = require('../models/user')
const passport = require('../config/ppConfig')

let authController = {
  signup: function (req, res) {
    console.log('started')
    res.render('auth/signup', {user: req.user}) // view not done yet
  },
  create: function (req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    }, function (err, createdUser) {
      if (err) {
        req.flash('error', 'Could not create user account')
        res.redirect('/auth/signup')
      } else {
        passport.authenticate('local', {
          successRedirect: '/todo',
          successFlash: 'Account created and logged in'
        })(req, res)
      }
    })
  },
  login: function (req, res) {
    res.render('auth/login', {user: req.user}) // view not done yet
  },
  loggedin: passport.authenticate('local', {
    successRedirect: '/todo',
    failureRedirect: '/auth/login',
    successFlash: 'You have logged in',
    failureFlash: 'Log in unsuccessful'
  }),
  logout: function (req, res) {
    req.logout()
    req.flash('success', 'You have logged out') // not implementing flash yet
    res.redirect('/auth/login')
  }

}

module.exports = authController
