import React from 'react'

const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className='border border-indigo-600'>
      <span className="">{symbol}</span>
      <span className="">{shape}</span>
      <span className="">{color}</span>
      <span className="">{measurement}</span>
    </div>
  )
}

export default DrawComponent