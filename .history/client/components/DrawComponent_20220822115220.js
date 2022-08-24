import React from 'react'
import { Button, Input, Row, Col } from "antd";
const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className='border-2 border-indigo-600 w-full'>
      <Row>
        <Col span={ }>
          <span className="">{symbol}</span>
        </Col>

        <Col span={ }>
          <span className="">{shape}</span>
        </Col>

        <Col span={ }>
          <span className="">{color}</span>
        </Col>
        
        <Col span={ }>
          <span className="">{measurement}</span>
        </Col>
      </Row>
    </div>
  )
}

export default DrawComponent