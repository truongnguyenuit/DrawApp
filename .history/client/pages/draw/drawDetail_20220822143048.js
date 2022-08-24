import React from 'react'
import { useRouter } from 'next/router'

const drawDetail = () => {
  const router = useRouter()

  return (
    <div>Draw
    {router.query.}
    </div>
  )
}

export default drawDetail