import { Row, Col, Input } from "antd";
import Link from "next/link";
import { useContext } from "react";
import { DrawContext } from "../../contexts/drawContext";

import { useFormik } from "formik"
import * as Yup from "yup"

const input = () => {

  const { addDraw } = useContext(DrawContext)

  const formik = useFormik({
    initialValues: {
      symbol: "",
      shape: "",
      color: "",
      measurement: "",
    },
    validationSchema: Yup.object({
      symbol: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      shape: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      color: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      measurement: Yup.string().required("Required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await addDraw(values)
        console.log(response)
        alert(response.message)

      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-start items-center w-full mb-[42px]'>
          <Link href={'/draw/list'} className="text-black font-bold">
            <span className="font-bold">
              Back to List
            </span>
          </Link>
          <span className="text-[40px] ml-[120px] ">Create New Draw</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Row gutter={[20, 16]}>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={12}>
                <span className='text-base font-bold '>Symbol</span>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: 45,
                    borderRadius: 4,
                    marginTop: 6,
                    marginBottom: 21,
                  }}

                  id="symbol"
                  name='symbol'
                  value={formik.values.symbol}
                  onChange={formik.handleChange}
                />
                <span className='text-base font-bold'>Color</span>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: 45,
                    borderRadius: 4,
                    marginTop: 6,
                  }}

                  id="color"
                  name='color'
                  value={formik.values.color}
                  onChange={formik.handleChange}
                />

              </Col>

              <Col span={12}>
                <span className='text-base font-bold'>Shape</span>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: 45,
                    borderRadius: 4,
                    marginTop: 6,
                    marginBottom: 21,
                  }}

                  id="shape"
                  name='shape'
                  value={formik.values.shape}
                  onChange={formik.handleChange}
                />
                <span className='text-base font-bold'>Measurement</span>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: 45,
                    borderRadius: 4,
                    marginTop: 6,
                  }}

                  id="measurement"
                  name='username'
                  value={formik.values.measurement}
                  onChange={formik.handleChange}
                />

              </Col>
            </div>
          </Row>
          <div className="w-full flex justify-center mt-5">
            <button
              type="submit"
              className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
            >
              Draw
            </button>
          </div>
        </form>



      </div>

    </div>
  )
}

export default input