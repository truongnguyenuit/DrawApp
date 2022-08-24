import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Row, Col } from "antd";
import { useContext } from 'react';
import { DrawContext } from '../../contexts/drawContext';
import DrawDetailComponent from '../../components/DrawDetailComponent';

const drawDetail = () => {
  const router = useRouter()
  const { drawState: { posts } } = useContext(DrawContext)

  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-between items-center w-full mb-[42px]'>
          <Link href={'/draw/list'} className="text-black font-bold " passHref>
            <span className=" font-bold cursor-pointer">
              Back to List
            </span>
          </Link>
          <span className="text-[40px] ">Your Draw</span>
          <button className='bg-white font-bold w-[140px] h-[40px] text-black rounded-[8px] border-2 border-black text-base'>
            <i className="fa-solid fa-file mr-3 "></i>
            Create
          </button>
        </div>

        <div className="w-full">
          <div className="border border-zinc-300 w-full rounded-t-md p-[10px] text-base mt-[45px]">
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
            if (item._id === router.query._id)
              return (
                <DrawDetailComponent
                  key={index}
                  symbol={item.symbol}
                  shape={item.shape}
                  color={item.color}
                  measurement={item.measurement}
                  _id={item._id}
                />
              )
          })}

        </div>
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
          >
            Edit
          </button>
        </div>


      </div>

    </div>
  )
}

export default drawDetail