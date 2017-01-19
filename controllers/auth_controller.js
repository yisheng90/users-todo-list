
const passport = require('../config/ppConfig')
const userController = require('./user_controller')

let authController = {
  signup: function (req, res) {
    console.log('started')
    res.render('auth/signup', {user: req.user}) // view not done yet
  },
  create: userController.create,
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
