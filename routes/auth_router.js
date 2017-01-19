const express = require('express')
const authController = require('../controllers/auth_controller')
const router = express.Router()

router.get('/signup', authController.signup)
router.post('/signup', authController.create)

router.get('/login', authController.login)
router.post('/login', authController.loggedin)

router.get('/logout', authController.logout)

module.exports = router
