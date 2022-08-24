import React from 'react'
import { Row, Col } from "antd";

const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {
  let measurementArray = []
  for (let i = 0; i < measurement; i++) {
    measurementArray[i] = symbol
  }
  let draw
  if (shape === 'rectangle') {
    draw = (
      <div className="flex gap-3 flex-col font-bold text-[16px]">
        {measurementArray.map(() => {
          return (

            <div className='flex gap-3'>
              {measurementArray.map(() => {
                return (
                  <span>
                    {symbol}
                  </span>
                )
              })}
            </div>

          )
        })}
      </div>
    )
  }
  if (shape === 'triangle') {
    draw = (
      <div className="flex gap-3 flex-col font-bold text-[16px]">
        {measurementArray.map((item1, index1) => {
          return (
console.log(index1)
            <div className='flex gap-3'>
              {measurementArray.map((item2, index2) => {
                return (
                  <span>
                    {symbol}
                  </span>
                )
              })}
            </div>

          )
        })}
      </div>
    )
  }
  return (
    <div className="">
      <div className='border w-full border-t-0 p-[10px] text-base'>
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
      <div className='flex justify-center mb mt-7'>

        {draw}

      </div>
    </div>
  )
}

export default DrawDetailComponent