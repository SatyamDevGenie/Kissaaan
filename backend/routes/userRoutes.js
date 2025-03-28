import express from 'express'
import {
  loginUser,
  logoutUser,
  registerUser
} from '../controllers/userController.js'

const router = express.Router()

// Public Routes
router.route('/register').post(registerUser) // Register a new user
router.route('/login').post(loginUser) // User login
router.route('/logout').post(logoutUser) // Logout user

export default router
