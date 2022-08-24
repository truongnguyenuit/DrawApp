import React from 'react'

const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className=''>
      <span className="">{symbol}</span>
      <span className="">{shape}</span>
      <span className="">{color}</span>
      <span className="">{symbol}</span>
    </div>
  )
}

export default DrawComponent