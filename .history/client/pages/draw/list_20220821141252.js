import React from 'react'
import { Table } from "antd"
import Link from 'next/link';
import { useContext } from 'react';
import { DrawContext } from '../../contexts/drawContext';

const columns = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: '_id',
    render: text => <Link href='/auth/login'>{text}</Link>,
  },
  {
    title: 'Shape',
    dataIndex: 'shape',
    key: '_id',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: '_id',
  },
  {
    title: 'Measurement',
    dataIndex: 'measurement',
    key: 'measurement',

  },

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: 'developer',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: 'loser',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: 'teacher',
  },
];



const list = () => {
  const { drawState: {posts}, getDraws } = useContext(DrawContext)
  console.log(posts)

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