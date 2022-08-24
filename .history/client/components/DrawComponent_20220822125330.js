import React from 'react'
import { Button, Input, Row, Col } from "antd";
const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className='border border-zinc-300 w-full border-t-0 p-[10px]'>
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
  )
}

export default DrawComponent