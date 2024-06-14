import Post from '../models/Post.js'
import fileUtils from '../utils/fileUtils.js'

class postService {
	async create(post, picture) {
		const fileName = fileUtils.saveFile(picture)
		const createdPost = await Post.create({ ...post, picture: fileName })

		return createdPost
	}
	async update(post) {
		if (!post._id) {
			throw new Error('ID is null')
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		})
		return updatedPost
	}
	async delete(id) {
		if (id) {
		}
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new postService()
