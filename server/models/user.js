const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: String,
  photo: String,
})

module.exports = mongoose.model('User', UserSchema)
