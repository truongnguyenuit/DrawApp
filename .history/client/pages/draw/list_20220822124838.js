import React from 'react'
import Link from 'next/link';
import { useContext } from 'react';
import { DrawContext } from '../../contexts/drawContext';
import DrawComponent from '../../components/DrawComponent';
import { Button, Input, Row, Col } from "antd";

const list = () => {
  const { drawState: { posts } } = useContext(DrawContext)

  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-between items-center w-full'>
          <span className="text-[40px] font-normal">Your Draws</span>
          <button className='bg-white font-bold w-[140px] h-[40px] text-black rounded-[8px] border-2 border-black'>
            <i className="fa-solid fa-file mr-3"></i>
            Create
          </button>
        </div>
        <div className="w-full">
          <div className="border-2 border-zinc-200 w-full rounded-t-md">
            <Row>
              <Col span={6}>
                <span className="font-bold">Symbol</span>
              </Col>
              <Col span={6}>
                <span className="font-bold">Shape</span>
              </Col>
              <Col span={6}>
                <span className="font-bold">Color</span>
              </Col>
              <Col span={6}>
                <span className="font-bold">Measurement</span>
              </Col>
            </Row>
          </div>
          {posts.map((item, index) => {
            return (
              <DrawComponent
                key={index}
                symbol={item.symbol}
                shape={item.shape}
                color={item.color}
                measurement={item.measurement}
              />
            )
          })}
        </div>

      </div>


    </div>
  )
}



export default list