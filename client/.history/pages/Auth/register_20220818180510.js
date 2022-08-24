import React, { useContext } from 'react'
import Link from 'next/link';

import { Button, Input, Row, Col } from "antd";

import { useFormik } from "formik"
import * as Yup from "yup"
const register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Required").min(4, "Must be 4 character or more")
    }),
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Confirm password don't match password!")
        return
      }
      try {
        const registerData = await registerUser(values)
        alert(registerData.message)

      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div>register</div>
  )
}

export default register