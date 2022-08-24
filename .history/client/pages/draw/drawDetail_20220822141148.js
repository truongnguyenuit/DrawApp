import React from 'react'

const Draw = ({ url }) => {
  return (
    <div>Draw
    {url.query.title}
    </div>
  )
}

export default Draw