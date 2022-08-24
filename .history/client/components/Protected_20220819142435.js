import React from 'react'
import { useState, useEffect } from 'react'
import setAuthToken from '../untils/setAuthToken'
import axios from "axios"

const Protected = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const loadUser = async () => {
    
    if (localStorage['LocalStorageTokenName']) {
      
      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        
        const response = await axios.get(`http://localhost:5000/api/auth`)
        console.log(response)
        if (response.data.success) {
          setAuthenticated(true)
        }
      } catch (error) {
        console.log(error)
      }
      console.log("IS AUTH?",isAuthenticated)
    }
    else {
      console.log("Don'")
    }
  }
  useEffect(() => {
    loadUser()
    
  }, [isAuthenticated])

  return children
}

export default Protected