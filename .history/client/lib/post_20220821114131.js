import axios from "axios"

const getDraws = async () => {
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