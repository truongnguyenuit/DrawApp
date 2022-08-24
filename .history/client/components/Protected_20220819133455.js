import React from 'react'
import { useState, useEffect } from 'react'

const Protected = ({ children }) => {

  useEffect(() => {
    console.log('truong')
  }, [])

  return children
}

export default Protected