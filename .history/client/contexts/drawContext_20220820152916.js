import { createContext, useReducer, useEffect } from 'react'

import axios from 'axios'

export const DrawContext = createContext()

export const blogReducer = (state, action) => {

  const { type, payload } = action

  switch (type) {
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      }
    case 'ALL_POSTS_LOADED_SUCCESS':
      return {
        ...state,
        allPosts: payload,
        postsLoading: false,
      }
    case 'ADD_BLOG':
      return {
        ...state,
        posts: [...state.posts, payload]
      }
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload)
      }

    case 'FIND_POST':
      return { ...state, post: payload }

    case 'UPDATE_POST':
      const newPosts = state.posts.map(post =>
        post._id === payload._id ? payload : post
      )
      return {
        ...state,
        posts: newPosts
      }

    default:
      return state

  }
}

const DrawContextProvider = ({ children }) => {
  // State
  const [blogState, dispatch] = useReducer(blogReducer, {
    post: null,
    posts: [],
    allPosts: [],
    postsLoading: true
  })

  useEffect(() => {
    getAllBlogs()
    getBlogs()
  }, [blogState.postsLoading])


  // Get user posts
  const getBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts`)
      if (response.data.success) {

        dispatch({
          type: 'POSTS_LOADED_SUCCESS',
          payload: response.data.posts
        })
      }
    } catch (error) {
      dispatch({ type: 'POSTS_LOADED_FAIL' })
    }
  }

  // Add post
  const addBlog = async newBlog => {
    try {
      const response = await axios.post(`http://localhost:5000/api/posts`, newBlog)
      if (response.data.success) {
        dispatch({
          type: 'ADD_POST',
          payload: { post: response.data.post }
        })
        return response.data
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: 'Server error' }
    }
  }

  // Update post
  const updateBlog = async updatedPost => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${updatedPost._id}`,
        updatedPost
      )
      if (response.data.success) {
        dispatch({ type: 'UPDATE_POST', payload: response.data.post })
        return response.data.message
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: 'Server error' }
    }
  }

  // Post context data
  const postContextData = {
    blogState,
    addBlog,
    getBlogs,
    getAllBlogs,
    deleteBlog,
    updateBlog,
    findBlog
  }

  return (
    <DrawContext.Provider value={postContextData}>
      {children}
    </DrawContext.Provider>
  )
}

export default DrawContextProvider