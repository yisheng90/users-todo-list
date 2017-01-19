const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const auth = require('./routes/auth_router')
const todo = require('./routes/todo_router')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
require('dotenv').config({ silent: true })

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SUPER_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(function (req, res, next) {
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user
  next()
})

app.set('view engine', 'ejs')
app.use('/auth', auth)
app.get('/', function (req, res) {
  res.redirect('/auth/login')
})

app.use(isLoggedIn)
app.use('/todo', todo)

app.listen(3000)
