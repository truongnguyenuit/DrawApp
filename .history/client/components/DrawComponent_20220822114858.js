import React from 'react'

const DrawComponent = ({ symbol, shape, color, measurement }) => {

  return (
    <div className='border-2 border-indigo-600 w'>
      <span className="">{symbol}</span>
      <span className="">{shape}</span>
      <span className="">{color}</span>
      <span className="">{measurement}</span>
    </div>
  )
}

export default DrawComponent