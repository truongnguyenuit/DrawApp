import { NextResponse } from "next/server";
import { useState, useEffect } from 'react'
import setAuthToken from '../untils/setAuthToken'
import axios from "axios"

export default function middleware(req)  {
  return (
    <div>_middleware</div>
  )
}

