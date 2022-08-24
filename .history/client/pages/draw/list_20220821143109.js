import React from 'react'
import { Table } from "antd"
import Link from 'next/link';
import { useContext } from 'react';
import { DrawContext } from '../../contexts/drawContext';

const columns = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
    render: text => <Link href='/draw/${_id}'>{text}</Link>,
  },
  {
    title: 'Shape',
    dataIndex: 'shape',
    key: 'shape',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Measurement',
    dataIndex: 'measurement',
    key: 'measurememt',

  },

];

const list = () => {
  const { drawState: {posts} } = useContext(DrawContext)

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
        <Table columns={columns} dataSource={posts} />
      </div>


    </div>
  )
}



export default list