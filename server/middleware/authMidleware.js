import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from '../configs/config.js'

export default function (req, res, next) {
	if (req.method === 'OPTIONS') {
		next()
	}

	try {
		// const token = req.headers.authorization.split(' ')[1]
		const token = req.headers.authorization

		if (!token) {
			return res.status(403).json({ message: 'Пользователь не авторизованн' })
		}

		const decodeData = jwt.verify(token, SECRET_TOKEN)
		// req.user = decodeData - DEBUG
		req.userId = decodeData.id
		// console.log(decodeData.id) - DEBUG
		next()
	} catch (err) {
		// console.log(err) - DEBUG
		return res.status(403).json({ message: 'Пользователь не авторизованн' })
	}
}
