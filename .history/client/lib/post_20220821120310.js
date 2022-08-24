import axios from "axios"

export const getDraws = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts`)
    
    if (response.data.success) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}