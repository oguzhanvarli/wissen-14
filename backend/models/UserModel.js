const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator")

const userModel = new Schema({
  username : {type : String, required : [true, 'Username is required!'], unique: true},
  password : {type: String, required : [true, 'Password is required!']},
  email : {
    type : String,
    required : [true, 'Email is required!'],
    unique: true,
    validate : {
      validator : validator.isEmail,
      message : 'Email is invalid!'
    }
  }
})

const User = mongoose.model('User', userModel)
module.exports = User