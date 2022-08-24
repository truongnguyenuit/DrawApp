import { Row, Col, Input } from "antd";

import Link from "next/link";

const input = () => {
  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-start items-center w-full mb-[42px]'>
          <Link href={''} className="text-black font-bold">
            <span className="">
              Back to List
            </span>
          </Link>
          <span className="text-[40px] ml-[90px] ">Create New Draw</span>
        </div>

        <Row gutter={[20, 16]}>
          <div className="w-full h-full flex rounded-[5px] overflow-hidden">
            <Col span={12}>
              <span className='text-base font-bold '>Symbol</span>
              <Input
                type="text"
                placeholder="Enter your email"
                style={{
                  height: 45,
                  borderRadius: 4,
                  marginTop: 6,
                  marginBottom: 21,
                }}

                id="username"
                name='username'
                value={''}
                onChange={''}
              />
              <span className='text-base font-bold'>Color</span>
              <Input
                type="text"
                placeholder="Enter your email"
                style={{
                  height: 45,
                  borderRadius: 4,
                  marginTop: 6,
                }}

                id="username"
                name='username'
                value={''}
                onChange={''}
              />

            </Col>

            <Col span={12}>
              <span className='text-base font-bold'>Shape</span>
              <Input
                type="text"
                placeholder="Enter your email"
                style={{
                  height: 45,
                  borderRadius: 4,
                  marginTop: 6,
                  marginBottom: 21,
                }}

                id="username"
                name='username'
                value={''}
                onChange={''}
              />
              <span className='text-base font-bold'>Measurement</span>
              <Input
                type="text"
                placeholder="Enter your email"
                style={{
                  height: 45,
                  borderRadius: 4,
                  marginTop: 6,
                }}

                id="username"
                name='username'
                value={''}
                onChange={''}
              />

            </Col>
          </div>
        </Row>
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
          >
            Draw
          </button>
        </div>


      </div>

    </div>
  )
}

export default input