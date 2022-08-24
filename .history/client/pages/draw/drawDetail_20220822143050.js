import React from 'react'
import { useRouter } from 'next/router'

const drawDetail = () => {
  const router = useRouter()

  return (
    <div>Draw
    {router.query._id}
    </div>
  )
}

export default drawDetail