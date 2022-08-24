import axios from "axios"

export const getDraws = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts`)
    console.log(response)
    if (response.data.success) {
      return "truong"
    }
  } catch (error) {
    console.log(error)
  }
}