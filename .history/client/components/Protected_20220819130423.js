import React from 'react'
import { useState, useEffect } from 'react'
const Protected = ({ children }) => {
  useEffect(() => {
    loadUser()
  }, [authState.isAuthenticated])

  return (
    <div>Protected</div>
  )
}

export default Protected