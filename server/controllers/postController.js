import Post from '../models/Post.js'
import fileUtils from '../utils/fileUtils.js'
import postService from '../service/postService.js'

class postController {
	async create(req, res) {
		try {
			const { title, content } = req.body

			if (!title || !content) {
				return res
					.status(400)
					.json({ message: 'Заданные поля не могут быть пусты' })
			}

			if (req.files) {
				const { picture } = req.files
				const fileName = fileUtils.saveFile(picture)

				const CreateImgPost = new Post({
					title,
					content,
					picture: fileName,
				})

				await CreateImgPost.save()
				return res.status(200).json(CreateImgPost)
			}

			const CreateNotImgPost = new Post({
				title,
				content,
			})

			await CreateNotImgPost.save()

			return res.status(200).json(CreateNotImgPost)

			// const post = await postService.create(req.body, req.files.picture)
			// res.status(200).json(post)

			// return res.status(200).json({ message: 'Пост создан' }) - DEBUG X)
		} catch (err) {
			console.log('ERROR: PostController/create')
		}
	}

	async getAll(req, res) {
		try {
			const posts = await Post.find().sort('-createdAt')
			return res.status(200).json(posts)
		} catch (err) {
			console.log('ERROR: PostController/getAll')
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id

			// console.log(id) - DEBUG

			if (!id) {
				return res.status(400).json({ message: 'Id не может быть пустым' })
			}

			const post = await Post.findById(id)
			// console.log(post) - DEBUG

			return res.status(200).json(post)
		} catch (err) {
			console.log('ERROR: PostController/getOne')
		}
	}
	async update(req, res) {
		try {
			const updatedPost = await postService.update(req.body)
			// return console.log(req.body) - DEBUG
			// return console.log(updatedPost) - DEBUG
			return res.json(updatedPost)
		} catch (err) {
			console.log('ERROR: PostController/update')
		}
	}
	async delete(req, res) {
		try {
			const { id } = req.body
			const post = await postService.delete(id)
			return res.status(200).json(post)
		} catch (err) {
			console.log('ERROR: PostController/delete')
			// console.log(err) - DEBUG
		}
	}
}

export default new postController()
