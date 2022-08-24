import React from 'react'

const Draw = ({ post }) => {
  return (
    <div>Draw</div>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = params
  return {
		props: {
			post
		},
		revalidate: 1
	}
}

export default Draw