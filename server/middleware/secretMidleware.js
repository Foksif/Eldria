import { secretToken } from '../configs/config.js'

export default function (req, res, next) {
	try {
		const { secret } = req.body
		// console.log(secret) - DEBUG
		if (!secret) {
			return res.status(415).json({
				message: 'Сопряжение не удалось, токен не валиден или отсутвует',
			})
		}

		if (secretToken !== secret) {
			return res.status(415).json({
				message: 'Сопряжение не удалось, токен не валиден или отсутвует',
			})
		}

		next()
	} catch (err) {
		console.log(err)
	}
}
