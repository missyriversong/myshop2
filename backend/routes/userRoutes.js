import express from 'express'
import authUser from '../controllers/userController.js'

const router = express.Router()


//@desc authenticates user, makes token
//@route POST  api/users/login
//@access public/anyone

router.post('/login', authUser)

export default router