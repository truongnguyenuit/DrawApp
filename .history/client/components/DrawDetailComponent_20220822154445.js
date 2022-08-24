import React from 'react'
import { Row, Col } from "antd";
import Link from 'next/link';
const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {

  return (
    <div className='border border-zinc-300 w-full border-t-0 p-[10px] text-base'>
      <Link href={`/draw/drawDetail?_id=${_id}`}>
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
      </Link>
    </div>
  )
}

export default DrawDComponent