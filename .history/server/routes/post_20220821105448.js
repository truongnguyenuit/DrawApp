const { verify } = require('argon2')
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')

// @route GET Post api/post
// @desc Get User Blog
// @access Private

router.get('/', verifyToken, async (req, res) => {

  try {
    const posts = await Post.find({ user: req.userId })

    // .populate('user', ['firstname'])
    res.json({ success: true, posts, })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }

})

// @route Post api/post
// @desc Create post
// @access Private

router.post('/', verifyToken, async (req, res) => {
  const { symbol, shape, color, measurement } = req.body

  // Simple validation
  if (!symbol || !shape || !color || !measurement)
    return res.status(400).json({ success: false, message: 'Missing infomation' })
  try {
    const newPost = new Post({
      symbol: symbol,
      shape: shape,
      color: color,
      measurement: measurement,
      user: req.userId
    })

    await newPost.save()

    res.json({ success: true, message: 'Create Draw Successful!!!', post: newPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

// @route Put api/post
// @desc Update post
// @access Private

router.put('/:id', verifyToken, async (req, res) => {
  const { title, description, img } = req.body
  // Simple validation
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: 'Title Is Required' })
  try {
    let updatedPost = {
      title: title,
      description: description,
      img: img
    }
    const postUpdateContidion = { _id: req.params.id, user: req.userId }

    updatedPost = await Post.findByIdAndUpdate(
      postUpdateContidion,
      updatedPost,
      { new: true }
    )
    // User not authorised to update post

    if (!updatedPost)
      return res
        .status(401)
        .json({
          success: false,
          message: 'Post Not Found Of User Not Authorized'
        })

    res.json({ success: true, message: 'Excellent Progress!', post: updatedPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

module.exports = router