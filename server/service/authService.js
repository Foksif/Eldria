import User from '../models/User.js'

class AuthService {
	async getUsers() {
		const users = await User.find()
		return users
	}
	async deleteUser(id) {
		if (!id) {
			throw new Error('ID is null')
		}
		await User.findByIdAndDelete(id)
	}
}

export default new AuthService()
