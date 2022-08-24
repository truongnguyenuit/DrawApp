import { NextResponse } from "next/server";
import { useState, useEffect } from 'react'
import setAuthToken from '../untils/setAuthToken'
import axios from "axios"

export default function middleware(req)  {
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
        console.log(error)
      }
      console.log(isAuthenticated)
    }
    else {
      console.log("Don't see local storage:")
    }
  }

  useEffect(() => {
    loadUser()
  }, [isAuthenticated])

  if()

  return NextResponse.next();
  
}

