import React from 'react'
import { Button, Input, Row, Col } from "antd";


import { useFormik } from 'formik';
import * as Yup from "yup";

const login = () => {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const loginData = await loginUser(values)
        console.log(loginData)
        alert(loginData.message)

      } catch (error) {
        console.log(error)
      }
    }
  })
  
  return (
    <div>login</div>
  )
}

export default login