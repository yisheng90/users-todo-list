const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: [5, 'Password should be between 6 to 20 characters'],
    maxlength: [20, 'Password should be between 6 to 20 characters']
  },
  password: {
    type: String,
    require: true,
    minlength: [6, 'Password should be between 6 to 10 characters'],
    maxlength: [10, 'Password should be between 6 to 10 characters']
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    match: emailRegex
  }
})

UserSchema.pre('save', function (next) {
  let user = this

  if (!user.isModified('password')) return next()

  let hashedPassword = bcrypt.hashSync(user.password, 10)

  user.password = hashedPassword
  next()
})

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)
