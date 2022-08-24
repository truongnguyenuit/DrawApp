import React from 'react'
import { Button, Input, Row, Col } from "antd";
import Link from 'next/link';


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
    
    <div className='flex justify-center bg-gray-200 h-[1000px]'>

      <div className="bg-white w-[500px] h-[492px] mt-[50px] flex flex-col items-center gap-0.5  p-10 rounded-lg">

        <span className="text-[40px] font-semibold">
          Login
        </span>

        <div className="w-full h-[48px]" />

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-full">

          <Row>
            <span className='font-bold mb-[10px]'>Email</span>
            <div className="w-full h-full flex rounded-[4px] overflow-hidden">
              <Col span={24}>

                <Input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: 45,
                    borderRadius: 4,
                  }}

                  id="username"
                  name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />

              </Col>
            </div>
          </Row>
          <div className="w-full h-[0x]" />
          <Row>

            <div className="flex justify-between  w-full mb-[10px]">
              <span className='font-bold'>Password</span>
              <Link href={''} className="">Forgot Password?</Link>
            </div>

            <div className="w-full h-full flex rounded-[4px] overflow-hidden">
              <Col span={24}>
                <Input.Password
                  placeholder="Enter your password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 4,
                  }}

                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>

          <Row>
            <Col span={24}>
              <div className="flex flex-row justify-start items-center gap-2 ">
                <input
                  type="checkbox"
                  placeholder="Enter your email"
                  style={{
                    height: 40,
                  }}

                />
                <span className="font-bold">Remember Me</span>
              </div>
            </Col>

          </Row>



          <Row>
            <Col span={24} >
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
                >
                  Login
                </button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24} >
              <div className="flex justify-center gap-1">
                <span className=''>You don’t have an account?</span>
                <Link href={''} className="">Sign Up</Link>
              </div>
            </Col>
          </Row>

        </form>
      </div>

    </div>
    
  )
}

export default login