import React from 'react'
import { Row, Col } from "antd";

const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {
  let draw = []
  for (let i = 0; i < measurement; i++) {
    draw[i] = i
    draw.join("<br/>")
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

        {draw.map((item) => {
          return (
            <div>
              {item}<br></br>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default DrawDetailComponent