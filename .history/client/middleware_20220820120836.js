import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import setAuthToken from "./untils/setAuthToken";
import axios from "axios"

export default function middleware(req) {
  let url = req.url
  const router = useRouter()

  const isAuthenticated = async () => {

    if (localStorage['LocalStorageTokenName']) {
      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        const response = await axios.get(`http://localhost:5000/api/auth`)
        if (response.data.success) {
          return true
        }
      } catch (error) {
        console.log(error)
      }
    }
    else {
      console.log("Don't see local storage:")
    }
  }

  if (!isAuthenticated && url.includes("/draw")) {
    return NextResponse.redirect("http://localhost:3000/auth/login")
  }
  return Nextres
}