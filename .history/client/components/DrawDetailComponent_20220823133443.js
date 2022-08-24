import React from 'react'
import { Row, Col } from "antd";

const DrawDetailComponent = ({ symbol, shape, color, measurement, _id }) => {
  let measurementArray = []
  for (let i = 0; i < measurement; i++) {
    measurementArray[i] = symbol
    
  }

  if (shape)
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

        <div className="">
          {measurementArray.map(() => {
            return (

              <div>
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

      </div>
    </div>
  )
}

export default DrawDetailComponent