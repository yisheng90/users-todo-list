const User = require('../models/user')
const passport = require('../config/ppConfig')
const Todo = require('../models/todo')

let userController = {
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
  delete: function (req, res) {
    Todo.find({user_id: req.user.id}).remove().exec((err) => {
      User.findByIdAndRemove(req.user.id, function (err) {
        if (err) {
          req.flash('error', 'Could not delete user account')
          res.redirect('/todo')
        } else {
          res.redirect('/')
        }
      })
    })
  }

}

module.exports = userController
