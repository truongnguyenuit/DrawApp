const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  shape: {
    type: String,
  },
  color: {
    type: String,
    default:''
  },
  measurement: {
    
  }
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