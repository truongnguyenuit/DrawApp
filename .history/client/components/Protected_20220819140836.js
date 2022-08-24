import React from 'react'
import { useState, useEffect } from 'react'
import setAuthToken from '../untils/setAuthToken'

const Protected = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const loadUser = async () => {
    
    if (localStorage['LocalStorageTokenName']) {
      
      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        
        const reconsole.log("truong")
        if (response.data.success) {
          setAuthenticated(true)
        }
      } catch (error) {
      }
      console.log("IS AUTH?",isAuthenticated)
    }
    else {
      console.log("TRUONG2")
    }
  }
  useEffect(() => {
    loadUser()
    
  }, [isAuthenticated])

  return children
}

export default Protected