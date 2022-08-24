import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useContext } from "react";
import Auth
import setAuthToken from "./untils/setAuthToken";
import axios from "axios"

export default function middleware(req) {
  let url = req.url
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  
  if (!isAuthenticated && url.includes("/draw")) {
    return NextResponse.redirect("http://localhost:3000/auth/login")
  }
  return NextResponse.next();
}