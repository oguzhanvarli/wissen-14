const express = require('express')
const User = require('../models/UserModel')
const router = express.Router()
const jwt = require("jsonwebtoken")

router.route('/register').post(async(req, res) => {
  try {
    const {username, email, password} = req.body
    let userFromDb = await User.findOne({email})
    if(userFromDb){
      return res.status(404).send({success: false, message: 'This Email is Exist!'})
    }
    const user = await User.create(req.body)
    res.status(200).send({success: true, message: 'User Created!', user : user})
  } catch (error) {
    res.status(500).send({success: true, message: error.message})
  }
})

router.route('/login').post(async(req, res) => {
  try {
    const {username, password} = req.body
    let userFromDb = await User.findOne({username})
    if(!userFromDb) return res.status(404).send({success: false, message: 'User is not Found!'})
    if(password !== userFromDb.password) return res.status(404).send({success: false, message: 'Incorrect Password'})

    let token = jwt.sign({username: userFromDb.username, id: userFromDb._id}, 'wissen14',{expiresIn: '1h'})

    res.status(200).send({success: true, message: `Welcome ${userFromDb.username}`, user: userFromDb, token: token})

  } catch (error) {
    res.status(500).send({success: true, message: error.message})
  }
})
module.exports = router