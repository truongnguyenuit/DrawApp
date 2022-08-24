import React, { useContext } from 'react'
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Input, Row, Col } from "antd";
import { registerUser } from '../../lib/auth';

import { useFormik } from "formik"
import * as Yup from "yup"
const register = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      lastName: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      email: Yup.string().required("Required").min(4, "Must be 4 character or more"),
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
    <div className=' flex justify-center bg-gray-200 h-[1000px]'>

      <div className="bg-white mt-[50px] w-[500px] h-[644px] flex flex-col items-center gap-0.5 p-10 rounded-lg">

        <span className="text-[40px] mb-[39px] font-semibold">
          Sign Up
        </span>

        <div className="w-full h-[42px]" />

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1 w-full">

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">

              <Col span={11.5}>
                <span className='text-base font-bold'>First Name</span>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  style={{
                    height: 45,
                    borderRadius: 5,
                    marginTop: 6,
                  }}

                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.errors.firstName && (
                  <p className='text-red-600 m-0'>{formik.errors.firstName}</p>
                )}
              </Col>

              <Col span={1}></Col>

              <Col span={11.5}>
                <span className='text-base font-bold'>Last Name</span>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  style={{
                    height: 45,
                    borderRadius: 5,
                    marginTop: 6,
                  }}

                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.errors.lastName && (
                  <p className='text-red-600 m-0'>{formik.errors.firstName}</p>
                )}
              </Col>

            </div>
          </Row>

          <Row>
            <div className="w-full h-full mt-[15px] flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <span className='text-base font-bold'>Email</span>
                <Input
                  type="text"
                  placeholder="text"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 5,
                    marginTop: 6,
                  }}

                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>

          {formik.errors.username && (
            <p className='text-red-600 m-0'>{formik.errors.email}</p>
          )}

          <Row>
            <div className="w-full h-full mt-[15px] flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <span className='text-base font-bold'>Password</span>
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 5,
                    marginTop: 6,
                  }}

                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>

          {formik.errors.password && (
            <p className='text-red-600 m-0'>{formik.errors.password}</p>
          )}

          <Row>
            <div className="w-full h-full mt-[15px] flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <span className='text-base font-bold'>Confirm Password</span>
                <Input.Password
                  placeholder="Confirm Password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 5,
                    marginTop: 6,
                  }}

                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>

          {formik.errors.confirmPassword && (
            <p className='text-red-600 m-0'>{formik.errors.confirmPassword}</p>
          )}

          <Row>
            <Col span={24}>
              <div className=" mt-[15px] w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
                >
                  Register
                </button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="flex justify-center mt-[20px] gap-1">
                <span className=''>Already have an account? </span>
                <Link href={''} >Log In</Link>
              </div>
            </Col>

          </Row>

        </form>
      </div>

    </div>
  )
}

export default register