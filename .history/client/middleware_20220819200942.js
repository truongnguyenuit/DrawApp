import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useState, useEffect } from "react";

import Set
import axios from "axios"
import { useRouter } from 'next/router'
import { NextResponse } from 'next/server'
export default function middleware(req){
  let url = req.url
  const [isAuthenticated, setAuthenticated] = useState(false)
  const router = useRouter()

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
  }, [isAuthenticated,router.asPath])

  if(!isAuthenticated && url.includes("/draw")){
    return NextResponse.redirect("http://localhost:3000/auth/login")
  }
}