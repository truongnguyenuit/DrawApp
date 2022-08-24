const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  shape: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default:''
  },
  measurement: {
    type: String,

  },
  createAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model('posts', PostSchema)