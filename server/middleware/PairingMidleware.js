import { PairingToken } from '../configs/config.js'

export default function (req, res, next) {
	try {
		const { pairing } = req.body
		if (!pairing) {
			return res.status(415).json({
				message: 'Сопряжение не удалось, токен не валиден или отсутвует',
			})
		}

		if (PairingToken !== pairing) {
			return res.status(415).json({
				message: 'Сопряжение не удалось, токен не валиден или отсутвует',
			})
		}

		next()
	} catch (err) {
		console.log(err)
	}
}
