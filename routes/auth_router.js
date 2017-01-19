const express = require('express')
const authController = require('../controllers/auth_controller')
const userController = require('../controllers/user_controller')
const router = express.Router()

router.get('/signup', authController.signup)
router.post('/signup', authController.create)

router.get('/login', authController.login)
router.post('/login', authController.loggedin)

router.get('/logout', authController.logout)
router.get('/delete', userController.delete)

module.exports = router
