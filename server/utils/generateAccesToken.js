import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from '../configs/config.js'

export const generateAccesToken = (id, roles) => {
	const payload = {
		id,
		roles,
	}

	return jwt.sign(payload, SECRET_TOKEN, { expiresIn: '24h' })
}
