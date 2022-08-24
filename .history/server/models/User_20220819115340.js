const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', UserSchema)