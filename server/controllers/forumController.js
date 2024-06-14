import Forum from '../models/Forum.js'

class forumController {
	async create(req, res) {
		try {
			const doc = new Forum({
				title: req.body.title,
				text: req.body.text,
				tags: req.body.tags,
				user: req.userId,
			})

			const post = await doc.save()
			res.status(200).json(post)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: "Internal server error code: '3:1' (Forum system)",
			})
		}
	}

	async getAll(req, res) {
		try {
			const posts = await Forum.find().populate('user').exec()

			res.status(200).json(posts)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: "Internal server error code: '3:2' (Forum system)",
			})
		}
	}

	async getOne(req, res) {
		try {
			const postId = req.params.id
			const posts = await Forum.findById(postId)

			if (!postId) {
				return res.status(404).json({
					message: 'Id поста не найден',
				})
			}

			if (!posts) {
				return res.status(404).json({
					message: 'Пост не найден',
				})
			}

			let doc = await Forum.findOneAndUpdate(
				{ _id: postId },
				{ $inc: { viewsCount: 1 } }
			)
				.populate('user')
				.exec()

			res.json(doc)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: "Internal server error code: '3:3' (Forum system)",
			})
		}
	}
}

export default new forumController()
