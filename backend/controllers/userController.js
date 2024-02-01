import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const authUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email: email})     //findOne  mongoose, could also write e.g. {email}
  if (user && await user.matchPassword(password)){     //method made on usermodel
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

export default authUser   //export {authUser}