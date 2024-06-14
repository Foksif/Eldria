import User from '../models/User.js'
// import Role from '../models/Role.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import { generateAccesToken } from '../utils/generateAccesToken.js'
import AuthService from '../service/authService.js'

class authController {
	async register(req, res) {
		try {
			//
			// Register account
			// Request: http://<hostName:port>/api/auth/register/   {POST}
			//

			const errors = validationResult(req) // validation
			if (!errors.isEmpty()) {
				return res
					.status(240)
					.json({ succes: false, message: 'Ошибка при регистрации', errors })
			}

			const { username, email, password } = req.body
			const checuser = await User.findOne({ username }) //	validation
			const checemail = await User.findOne({ email }) //	validation

			if (checemail || checuser) {
				//	validation
				return res.status(240).json({
					succes: false,
					message:
						'Такое имя пользователя или электронная почта уже существуют',
				})
			}

			const hashPassword = bcrypt.hashSync(password, 7)

			const IsAdmin = false
			// const userRole = await Role.findOne({ value: false })

			const user = new User({
				username,
				email,
				password: hashPassword,
				isAdmin: IsAdmin,
			})

			const token = generateAccesToken(user.__id, user.isAdmin)

			await user.save()

			console.log('REGISTER SUCCES. LOGIN: ' + username)

			return res.status(200).json({
				succes: true,
				message: 'Поьзователь успешно зарегистрированн',
				token,
			})

			// Logic end
		} catch (err) {
			console.log(err)
			res.status(240).json({ succes: false, message: 'Register error' })
		}
	} // end Func

	// LOGIN
	async login(req, res) {
		try {
			//
			// Register account
			// Request: http://<hostName:port>/api/auth/login/   {POST}
			//

			const { username, password } = req.body
			const user = await User.findOne({ username })
			if (!user) {
				//	validation
				return res
					.status(240)
					.json({ succes: false, message: 'Неверный логин или пароль' })
			}

			const validPassword = bcrypt.compareSync(password, user.password)
			if (!validPassword) {
				//	validation
				return res
					.status(240)
					.json({ succes: false, message: 'Неверный логин или пароль' })
			}

			const token = generateAccesToken(user._id, user.roles)
			return res
				.status(200)
				.json({ succes: true, token, message: 'Вход успешен!' })
		} catch (err) {
			console.log(err)
			res.status(240).json({ succes: false, message: 'Login error' })
		}
	}

	async getUsers(req, res) {
		try {
			//
			// Get all users
			// Request: http://<hostName:port>/api/auth/users/   {GET}
			//

			const users = await AuthService.getUsers()

			res.status(200).json(users)
		} catch (err) {
			console.log(err)
		}
	}

	async getMe(req, res) {
		try {
			//
			// Get my profile
			// Request: http://<hostName:port>/api/auth/getme/   {GET}
			//

			const user = await User.findById(req.userId) //	validation
			if (!user) {
				return res.status(404).json({
					message: 'Пользователь не найден',
				})
			}

			const { password, ...userData } = user._doc
			res.status(200).json({ ...userData })
			// console.log({ ...userData }) - DEBUG
		} catch (err) {
			console.log(err)
		}
	}

	async deleteUsers(req, res) {
		try {
			//
			// Delete user
			// Request: http://<hostName:port>/api/auth/users/   {DELETE}
			//

			const { id } = req.body
			if (!id) {
				//	validation
				return res.status(400).json({ messgae: 'User ID не указан' })
			}

			await User.findByIdAndDelete(id)
			res.status(200).json({ message: 'Пользователь удалённ' })
		} catch (err) {
			console.log('Error: DeleteUser')
		}
	}
}

export default new authController()
