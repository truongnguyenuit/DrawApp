import React from 'react'
import { Row, Col } from "antd";
const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {

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
      <div>
        {for(let )}

      </div>
    </div>
  )
}

export default DrawDetailComponent