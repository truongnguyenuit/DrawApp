import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import setAuthToken from "./untils/setAuthToken";
import axios from "axios"

export default function middleware(req) {
  
  return NextResponse.next();
}