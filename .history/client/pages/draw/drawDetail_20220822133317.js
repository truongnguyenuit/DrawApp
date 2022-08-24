import React from 'react'

const Draw = ({ post }) => {
  return (
    <div>Draw
    {post}
    </div>
  )
}

export const getStaticPaths = async () => {
	const paths = 5
	console.log(paths)

	return {
		paths,
		// fallback: false // bat ki path nao k returned boi getStaticPaths se toi trang 404
		fallback: true // path nao k returned ngay lap tuc se show trang "tam thoi" => doi getStaticProps chay
		// => getStaticProps chay xong => return trang hoan chinh
	}
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