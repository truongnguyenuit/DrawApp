import axios from "axios"

export const getPosts = async limit => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
		)
		return response.data
	} catch (error) {
		console.log(error)
	}
}