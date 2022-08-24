import React from 'react'
import { Button, Input, Row, Col } from "antd";
const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className='border-2 border-indigo-600 w-full'>
      <Row>
      <Col span={}></Col>
        <span className="">{symbol}</span>
        
        
        <Col span={}>
        <span className="">{shape}</span>
        
        <Col span={}></Col>
        <span className="">{color}</span>
        <Col span={}></Col>
        <span className="">{measurement}</span>
      </Row>
    </div>
  )
}

export default DrawComponent