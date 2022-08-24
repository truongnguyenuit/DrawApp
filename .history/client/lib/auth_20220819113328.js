import axios from "axios"

// Login
const loginUser = async userForm => {
  try {

    const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
    if (response.data.success)
      localStorage.setItem('LocalStorageTokenName', response.data.accessToken)

    await loadUser()
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}