import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { SECRET_TOKEN } from '../configs/config.js'

export default function () {
	return async function (req, res, next) {
		if (req.method === 'OPTIONS') {
			next()
		}

		try {
			const token = req.headers.authorization
			if (!token) {
				return res
					.status(403)
					.json({ message: 'Пользователь не является администратором' })
			}

			const { id } = jwt.verify(token, SECRET_TOKEN)

			// console.log(id)

			const { isAdmin } = await User.findById(id).exec()

			// console.log(isAdmin)

			if (!isAdmin) {
				return res
					.status(403)
					.json({ message: 'Пользователь не является администратором' })
			}

			next()
		} catch (err) {
			return res
				.status(403)
				.json({ message: 'Пользователь не является администратором' })
		}
	}
}
