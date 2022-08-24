import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import setAuthToken from "./untils/setAuthToken";
import axios from "axios"

export default function middleware(req) {
  let url = req.url

  const isAuthenticated = async () => {

    
  }
  console.log('truong')
  if (!isAuthenticated && url.includes("/draw")) {
    return NextResponse.redirect("http://localhost:3000/auth/login")
  }
  return NextResponse.next();
}