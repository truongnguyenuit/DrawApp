import React from 'react'
import { Row, Col } from "antd";

const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {
  let draw = 'a'
  for (let i = 1; i <= measurement; i++) {
   console.log(i)
  }
  return (
    <div className="">
      <div className='border border-zinc-300 w-full border-t-0 p-[10px] text-base'>
        <Row>

          <Col span={6}>
            <span className="">{symbol}</span>
          </Col>

          <Col span={6}>
            <span className="">{shape}</span>
          </Col>

          <Col span={6}>
            <span className="">{color}</span>
          </Col>

          <Col span={6}>
            <span className="">{measurement}</span>
          </Col>

        </Row>
      </div>
      <div className='bg-red-200 flex justify-center'>
      func
        

      </div>
    </div>
  )
}

export default DrawDetailComponent