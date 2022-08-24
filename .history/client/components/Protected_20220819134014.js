import React from 'react'
import { useState, useEffect } from 'react'

const Protected = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState
  useEffect(() => {
    console.log('truong')
  }, [])

  return children
}

export default Protected