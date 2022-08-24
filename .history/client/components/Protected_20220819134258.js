import React from 'react'
import { useState, useEffect } from 'react'
import setAuthToken from '../untils/setAuthToken'

const Protected = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const loadUser = async () => {

    if (localStorage['LocalStorageTokenName']) {
      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        const response = await axios.get(`http://localhost:5000/api/auth`)
        if (response.data.success) {
          setAuthenticated(true)
        }
      } catch (error) {
        localStorage.removeItem('LocalStorageTokenName')
        setAuthToken(null)
        setAuthenticated(false)
      }
    }
    else {
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null }
      })
    }
  }
  useEffect(() => {
    console.log('truong')
  }, [])

  return children
}

export default Protected